/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IgxSnackbarComponent, IgxDialogComponent, SortingDirection } from '@infragistics/igniteui-angular';
import { ItemService } from '../services/block-item.service';
import { BlockItem } from '../core/interfaces';
import { AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { IgxGridComponent, IgxOverlayOutletDirective, CloseScrollStrategy } from '@infragistics/igniteui-angular';
import { transformCoinImgUrl } from '../core/utils';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IgxPieChartComponent } from 'igniteui-angular-charts';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {

  public searchCrypto: string;
  public blockItemsCollection: AngularFireList<BlockItem>;
  public blockItems: BlockItem[] = [];
  public newItem: BlockItem;
  public coinName;
  public holdings;
  public deletedItem: BlockItem;

  // Number options
  public options = {
    digitsInfo: '1.2-2',
    currencyCode: 'USD'
  };
  public formatOptions = this.options;

  public helper = new Helper();
  @ViewChild(IgxOverlayOutletDirective, { static: true }) public outlet: IgxOverlayOutletDirective;
  @ViewChild('snack', { static: true }) public snack: IgxSnackbarComponent;
  @ViewChild('snackExists', { static: true }) public snackExists: IgxSnackbarComponent;
  @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
  @ViewChild('modal', { static: true }) public dialog: IgxDialogComponent;
  @ViewChild("chart", { static: true }) public chart: IgxPieChartComponent;

  constructor(private blockItemService: ItemService, private router: Router, private dataService: DataService,
    public afAuth: AngularFireAuth) { }

  ngAfterViewInit() {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.blockItemService.getItemsList().snapshotChanges().pipe(
          map(actions =>
            // actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
            actions.map(a => {
              const item: BlockItem = {
                key: a.key,
                fullName: a.payload.val().fullName,
                holdings: a.payload.val().holdings,
                name: a.payload.val().name,
                supply: a.payload.val().supply,
                changePct24Hour: a.payload.val().changePct24Hour,
                price: a.payload.val().price,
                imageUrl: a.payload.val().imageUrl,
                total: a.payload.val().holdings * a.payload.val().price
              };

              return item;
            })
          )
        ).subscribe(items => {
          this.blockItems = items;
          this.grid1.sort({ fieldName: 'total', dir: SortingDirection.Desc, ignoreCase: false });

          // Update portfolio upon load
          this.updatePortfolio();

          // Explode the last slice
          this.chart.explodedSlices.add(items.length - 1);
        });
      }
    });
  }

  // tslint:disable-next-line: member-ordering
  private _dialogOverlaySettings = {
    closeOnOutsideClick: true,
    modal: true,
    outlet: null,
    scrollStrategy: new CloseScrollStrategy()
  };

  public restore() {
    this.blockItemService.createItem(this.deletedItem);
    this.snack.close();
    this.deletedItem = new BlockItem();
  }

  public openDialog() {
    this._dialogOverlaySettings.outlet = this.outlet;
    this.dialog.open(this._dialogOverlaySettings);
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
      total += this.helper.calculateHoldings(coin.holdings, coin.price);
    }

    return total;
  }

  public addItem(event) {
    // Check whether the coin is already in your portfolio
    this.checkCoinExistence(this.coinName);
    event.dialog.close();
  }

  private checkCoinExistence(coin) {
    const fCoin = this.blockItems.filter(item => item.name === coin.toUpperCase());

    if (fCoin.length !== 0) {
      this.snackExists.open('Already added!');
    } else {
      // find coin and add it if exist
      this.addRow(coin.toUpperCase());
    }
  }

  public addRow(symbol) {
    this.dataService.getCryptoIdFromSymbol(symbol).subscribe(filteredItem => {
      if (filteredItem) {
        this.dataService.getSpecificCoinData(filteredItem['Name']).subscribe(blockItem => {
          blockItem.holdings = this.holdings;
          this.blockItemService.createItem(blockItem);

          this.snackExists.open('Coin Added!');
          this.clearFormInputs();
        }, err => {
          this.clearFormInputs();
          this.snackExists.open(err);
        });
      } else {
        this.snackExists.open('Coin does not exist!');
      }
    });
  }

  public deleteRow(cell) {
    const blockItem = cell.row.data;

    this.delete(blockItem);
  }

  public updateRow(evt) {
    const rowItem = evt.rowID;
    rowItem.holdings = evt.newValue;

    this.blockItemService.updateItem(rowItem.key, rowItem);

  }
  /*
    Used by action strip grid
  */
  public updateCell(evt) {
    const rowItem = evt.owner.getRowData(evt.rowID);
    rowItem.holdings = evt.newValue;

    this.blockItemService.updateItem(rowItem.key, rowItem);
  }

  public deleteRowFromActions(evt) {
    this.delete(evt.data);
  }

  public delete(blockItem) {
    // Delele item from AngularFireList
    this.blockItemService.deleteItem(blockItem.key);

    // Stores deleted item for the 'Restore' Snackbar logic
    this.deletedItem = new BlockItem();
    Object.assign(this.deletedItem, blockItem);

    delete this.deletedItem['key'];
    this.snack.open();
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

  public removeSorting($event) {
    this.grid1.columns.forEach((col) => {
      if (!(col.field === $event.fieldName)) {
        this.grid1.clearSort(col.field);
      }
    });
  }
  public calculateHoldings(holdings: number, price: number) {
    return this.helper.calculateHoldings(holdings, price);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public setFormat(context) {
    return context.item.fullName + " (" + Math.round(context.percentValue * 100)/100 + '%)';
  }

  public pieSliceClickEvent(e: any): void {
    e.args.isExploded = !e.args.isExploded;
  }
}

class Helper {
  public calculateHoldings(holdings: number, price: number) {
    return holdings * price;
  }
}
