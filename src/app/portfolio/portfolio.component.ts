import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { IgxSnackbarComponent, IgxDialogComponent, SortingDirection } from 'igniteui-angular';
import { ItemService } from '../services/block-item.service';
import { BlockItem } from '../core/interfaces';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { IgxGridComponent, IgxOverlayOutletDirective, CloseScrollStrategy } from 'igniteui-angular';
import { transformCoinImgUrl } from '../core/utils';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {

  public searchCrypto: string;
  public blockItemsCollection: AngularFireList<BlockItem>;
  public blockItems: BlockItem[] = [];
  public selectedRow;
  public selectedCell;
  public newItem: BlockItem = new BlockItem();
  public deletedItem: BlockItem = new BlockItem();

  @ViewChild(IgxOverlayOutletDirective) public outlet: IgxOverlayOutletDirective;
  @ViewChild('snack') public snack: IgxSnackbarComponent;
  @ViewChild('snackExists') public snackExists: IgxSnackbarComponent;
  @ViewChild('grid1') public grid1: IgxGridComponent;
  @ViewChild('modal') public dialog: IgxDialogComponent;

  constructor(private blockItemService: ItemService, private router: Router, private dataService: DataService,
    private readonly afs: AngularFirestore, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.blockItemsCollection = this.blockItemService.getItemsList();
    this.blockItemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => ({
        key: a.payload.key, ...a.payload.val()
      })))
    ).subscribe(res => {
      this.blockItems = res;
    });

    setTimeout(() => {
      this.refreshGrid();
    }, 100);

    this.grid1.sort({ fieldName: "coinSymbol", dir: SortingDirection.Asc, ignoreCase: false });
    this.cdr.detectChanges();
  }

  ngOnInit() { }

  private _dialogOverlaySettings = {
    closeOnOutsideClick: true,
    modal: true,
    outlet: this.outlet,
    scrollStrategy: new CloseScrollStrategy()
  };


  private positive24h = (rowData: any): boolean => {
    return rowData.oneDayPercentChange > 0;
  }
  private negative24h = (rowData: any): boolean => {
    return rowData.oneDayPercentChange < 0;
  }

  // tslint:disable-next-line:member-ordering
  public dailyChanges = {
    positive: this.positive24h,
    negative: this.negative24h
  };

  public selectCell(event) {
    this.selectedCell = event;
  }

  public restore() {
    this.blockItemService.createItem(this.deletedItem);
    this.snack.hide();
    this.deletedItem = new BlockItem();
  }

  public openDialog() {
    this._dialogOverlaySettings.outlet = this.outlet;
    this.dialog.open(this._dialogOverlaySettings);
  }

  private refreshGrid() {
    this.grid1.reflow();
  }

  public addItem(event) {
    if (!this.dataService.cachedData) {
      this.dataService.getData();
    }    
    
    // Check whether the coin is already in your portfolio
    this.checkCoinExistence(this.newItem.coinSymbol);
    event.dialog.close();
  }

  private updateItem(item) {
    this.blockItemService.updateItem(item.key, item);
  }

  private deleteItem(item) {
    this.blockItemService.deleteItem(item.key);
  }

  private checkCoinExistence(coin) {
    const fCoin = this.blockItems.filter(item => item.coinSymbol === coin.toUpperCase());

    if (fCoin.length !== 0) {
      this.snackExists.message = 'Already added!';
      this.snackExists.show();
    } else {
      // find coin and add it if exsist
      this.addRow(this.newItem.coinSymbol.toUpperCase());
    }
  }

  public updatePortfolio() {
    for (const coin of this.blockItems) {
      this.dataService.getSpecificCoinData(coin.coinSymbol).subscribe(res => {
        coin.oneDayPercentChange = res['USD.CHANGEPCT24HOUR'];
        coin.usdPrice = res['USD.PRICE'];
      });
    }
  }

  public openChart(evt, symbol) {
    this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'show_chart', cryptoName: symbol, daysCount: 100 }]);
  }

  public calculateTotalPortfolio() {
    let total = 0;

    for (const coin of this.blockItems) {
      total += this.calculateHoldings(coin.holdings, coin.usdPrice);
    }

    return total;
  }

  public getCoinImage(imageUrl: string) {
    return transformCoinImgUrl(imageUrl);
  }

  private calculateHoldings(holdings: number, price: number) {
    return holdings * price;
  }

  private addRow(symbol) {
    this.dataService.getCryptoIdFromSymbol(symbol).subscribe(filteredItem => {
      if (filteredItem) {
        this.dataService.getSpecificCoinData(filteredItem['Name']).subscribe(result => {
          this.newItem.coinSymbol = result["USD.FROMSYMBOL"];
          this.newItem.coinName = result['USD.FROMSYMBOL'];
          this.newItem.totalSupply = result['USD.SUPPLY'];
          this.newItem.oneDayPercentChange = result['USD.CHANGEPCT24HOUR'];
          this.newItem.usdPrice = Number(result["USD.PRICE"]);
          this.newItem.imageUrl = result['USD.IMAGEURL'];

          this.blockItemService.createItem(this.newItem);
          this.newItem = new BlockItem();

          this.snackExists.message = 'Coin Added!';
          this.snackExists.show();
        }, err => {
          console.log(err);
        });
      } else {
        this.snackExists.message = 'Coin does not exist!';
        this.snackExists.show();
      }
    });
  }

  private deleteRow() {
    this.selectedRow = Object.assign({}, this.selectedCell.row);
    this.deleteItem(this.selectedCell.cell.row.rowData);
    this.deletedItem.coinName = this.selectedCell.cell.row.rowData.coinName;
    this.deletedItem.holdings = this.selectedCell.cell.row.rowData.holdings;
    this.deletedItem.coinSymbol = this.selectedCell.cell.row.rowData.coinSymbol;
    this.deletedItem.totalSupply = this.selectedCell.cell.row.rowData.totalSupply;
    this.deletedItem.oneDayPercentChange = this.selectedCell.cell.row.rowData.oneDayPercentChange;
    this.deletedItem.usdPrice = this.selectedCell.cell.row.rowData.usdPrice;
    this.deletedItem.imageUrl = this.selectedCell.cell.row.rowData.imageUrl;

    this.selectedCell = {};
    this.snack.show();
  }

  private updateRow(obj) {
    const updatedItem = obj.row.rowData;
    updatedItem.holdings = obj.newValue;

    this.updateItem(updatedItem);
  }
}
