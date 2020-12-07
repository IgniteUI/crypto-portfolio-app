import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { IgxSnackbarComponent, IgxDialogComponent, SortingDirection } from 'igniteui-angular';
import { ItemService } from '../services/block-item.service';
import { BlockItem } from '../core/interfaces';
import { AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { IgxGridComponent, IgxOverlayOutletDirective, CloseScrollStrategy } from 'igniteui-angular';
import { transformCoinImgUrl } from '../core/utils';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
   selector: 'app-portfolio',
   templateUrl: './portfolio.component.html',
   styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

   public searchCrypto: string;
   public blockItemsCollection: AngularFireList<BlockItem>;
   public blockItems: BlockItem[] = [];
   public newItem: BlockItem;
   public coinName;
   public holdings;
   public deletedItem: BlockItem;

   @ViewChild(IgxOverlayOutletDirective, { static: true }) public outlet: IgxOverlayOutletDirective;
   @ViewChild('snack', { static: true }) public snack: IgxSnackbarComponent;
   @ViewChild('snackExists', { static: true }) public snackExists: IgxSnackbarComponent;
   @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
   @ViewChild('modal', { static: true }) public dialog: IgxDialogComponent;

   constructor(private blockItemService: ItemService, private router: Router, private dataService: DataService,
      public afAuth: AngularFireAuth) { }

   ngAfterViewInit() {
      this.afAuth.authState.subscribe(res => {
         if (res && res.uid) {
            this.blockItemService.getItemsList().snapshotChanges().pipe(
               map(actions =>
                  actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
               )
            ).subscribe(items => {
               this.blockItems = items;
            });

            this.grid1.sort({ fieldName: 'name', dir: SortingDirection.Asc, ignoreCase: false });
         }
      });
   }

   ngOnInit() { }

   // tslint:disable-next-line: member-ordering
   private _dialogOverlaySettings = {
      closeOnOutsideClick: true,
      modal: true,
      outlet: null,
      scrollStrategy: new CloseScrollStrategy()
   };

   public restore() {
      this.blockItemService.createItem(this.deletedItem);
      this.snack.hide();
      this.deletedItem = new BlockItem();
   }

   public openDialog() {
      this._dialogOverlaySettings.outlet = this.outlet;
      this.dialog.open(this._dialogOverlaySettings);
   }

   public addItem(event) {
      // Check whether the coin is already in your portfolio
      this.checkCoinExistence(this.coinName);
      event.dialog.close();
   }

   private updateItem(item) {
      this.blockItemService.updateItem(item.key, item);
   }

   private deleteItem(item) {
      this.blockItemService.deleteItem(item.key);
   }

   private checkCoinExistence(coin) {
      const fCoin = this.blockItems.filter(item => item.name === coin.toUpperCase());

      if (fCoin.length !== 0) {
         this.snackExists.message = 'Already added!';
         this.snackExists.show();
      } else {
         // find coin and add it if exsist
         this.addRow(coin.toUpperCase());
      }
   }

   public updatePortfolio() {
      for (const coin of this.blockItems) {
         this.dataService.getSpecificCoinData(coin.name).subscribe(res => {
            coin.changePct24Hour = res.changePct24Hour;
            coin.price = res.price;
         });
      }
   }

   public openChart(evt, symbol) {
      this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'show_chart', cryptoName: symbol, daysCount: 100 }]);
   }

   public getCoinImage(imageUrl: string) {
      return transformCoinImgUrl(imageUrl);
   }

   public calculateTotalPortfolio() {
      let total = 0;

      for (const coin of this.blockItems) {
         total += this.calculateHoldings(coin.holdings, coin.price);
      }

      return total;
   }

   private calculateHoldings(holdings: number, price: number) {
      return holdings * price;
   }

   public addRow(symbol) {
      this.dataService.getCryptoIdFromSymbol(symbol).subscribe(filteredItem => {
         if (filteredItem) {
            this.dataService.getSpecificCoinData(filteredItem['Name']).subscribe(blockItem => {
               blockItem.holdings = this.holdings;
               this.blockItemService.createItem(blockItem);

               this.snackExists.message = 'Coin Added!';
               this.snackExists.show();
               this.clearFormInputs();
            }, err => {
               this.snackExists.message = err;
               this.snackExists.show();
            });
         } else {
            this.snackExists.message = 'Coin does not exist!';
            this.snackExists.show();
         }
      });
   }

   public deleteRow(cell) {
      const blockItem = cell.row.rowData;

      // Detele item from AngularFireList
      this.deleteItem(blockItem);

      // Stores deleted item for the 'Restore' Snackbar logic
      this.deletedItem = new BlockItem();
      Object.assign(this.deletedItem, blockItem);

      delete this.deletedItem['key'];
      this.snack.show();
   }

   public updateRow(evt) {
      const rowItem = evt.rowID;
      rowItem.holdings = evt.newValue;

      this.updateItem(rowItem);
   }

   private positive24h = (rowData: any): boolean => {
      return rowData.changePct24Hour > 0;
   }
   private negative24h = (rowData: any): boolean => {
      return rowData.changePct24Hour < 0;
   }

   // tslint:disable-next-line:member-ordering
   public dailyChanges = {
      positive: this.positive24h,
      negative: this.negative24h
   };

   private clearFormInputs() {
      this.coinName = '';
      this.holdings = '';
   }
}
