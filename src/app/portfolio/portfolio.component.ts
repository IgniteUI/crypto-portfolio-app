import { Component, OnInit, NgModule, ViewChild, ViewEncapsulation, Input} from '@angular/core';
import { trigger, transition, style, animate, query, stagger, group, keyframes} from '@angular/animations';

import { IgxFilterOptions, IgxListItemComponent, IgxSnackbarComponent } from 'igniteui-angular/main';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { BlockItem, ItemService } from '../block-item.service';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

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
  private fetchedCoin: any;

  @ViewChild('snack') public snack: IgxSnackbarComponent;
  @ViewChild('snackExists') public snackExists: IgxSnackbarComponent;

  public newItem: BlockItem = new BlockItem();
  public deletedItem: BlockItem = new BlockItem();

  constructor(private blockItemService: ItemService, private router: Router, private dataService: DataService,
      private readonly afs: AngularFirestore) {

  }

  ngOnInit() {
    this.blockItemsCollection = this.blockItemService.getItemsList();
    this.blockItemsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => ({ key: a.payload.key, ...a.payload.val()
      })))
    ).subscribe(res => {
      this.blockItems = res;
    });
  }

  private addItem() {
    if (!this.dataService.cachedData) {
      this.dataService.getData();
    }

    // Check whether the coin is already in your portfolio
    this.checkCoinExistence(this.newItem.coinSymbol);
  }

  private updateItem(item) {
    this.blockItemService.updateItem(item.key, item);
  }

  private deleteItem(item) {
    this.blockItemService.deleteItem(item.key);
  }

  public selectCell(event) {
    this.selectedCell = event;
  }

  public restore() {
    this.blockItemService.createItem(this.deletedItem);
    this.snack.hide();
    this.deletedItem = new BlockItem();
  }

  private checkCoinExistence(coin) {
      const fCoin = this.blockItems.filter(item => item.coinSymbol === coin.toUpperCase());

      if (fCoin.length !== 0) {
        this.snackExists.message = 'Already added!';
        this.snackExists.show();
      } else {
        // find coin and add it if exsist
        this.findCoin(this.newItem.coinSymbol.toUpperCase());
      }
  }
  public findCoin(coin) {
    this.dataService.getCryptoIdFromSymbol(coin).subscribe(filteredItem => {
      if (filteredItem) {
        this.dataService.getSpecificCoinData(filteredItem['id']).subscribe(result => {
          this.newItem.coinSymbol = this.newItem.coinSymbol.toUpperCase();
          this.newItem.coinName = result['name'];
          this.newItem.cryptoId = result['id'];
          this.newItem.rank = result['rank'];
          this.newItem.totalSupply = result['total_supply'];
          this.newItem.oneHourPercentChange = result['quotes.USD.percent_change_1h'];
          this.newItem.oneDayPercentChange = result['quotes.USD.percent_change_24h'];
          this.newItem.sevenDaysPercentChange = result['quotes.USD.percent_change_7d'];
          this.newItem.usdPrice = result['quotes.USD.price'];

          this.blockItemService.createItem(this.newItem);
          this.newItem = new BlockItem();

          this.snackExists.message = 'Added!';
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

  public updatePortfolio() {
    for (const coin of this.blockItems) {
        this.dataService.getSpecificCoinData(coin.cryptoId).subscribe(res => {
          coin.oneHourPercentChange = res['quotes.USD.percent_change_1h'];
          coin.oneDayPercentChange = res['quotes.USD.percent_change_24h'];
          coin.sevenDaysPercentChange = res['quotes.USD.percent_change_7d'];
          coin.usdPrice = res['quotes.USD.price'];
        });
    }
  }

  public openChart(evt, symbol) {
    this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'show_chart', cryptoName: symbol, daysCount: 100 }]);
  }

  private calculateHoldings(holdings, price) {
    return holdings * price;
  }

  private calculateTotalPortfolio() {
    let total = 0;

    for (const coin of this.blockItems) {
      total += this.calculateHoldings(coin.holdings, coin.usdPrice);
    }

    return total;
  }

  public deleteRow(item) {
    this.selectedRow = Object.assign({}, this.selectedCell.row);
    this.deleteItem(this.selectedCell.cell.row.rowData);

    // store deleted data
    this.deletedItem.coinName = this.selectedCell.cell.row.rowData.coinName;
    this.deletedItem.holdings = this.selectedCell.cell.row.rowData.holdings;
    this.deletedItem.cryptoId = this.selectedCell.cell.row.rowData.cryptoId;
    this.deletedItem.coinSymbol = this.selectedCell.cell.row.rowData.coinSymbol;
    this.deletedItem.rank = this.selectedCell.cell.row.rowData.rank;
    this.deletedItem.totalSupply = this.selectedCell.cell.row.rowData.totalSupply;
    this.deletedItem.oneHourPercentChange = this.selectedCell.cell.row.rowData.oneHourPercentChange;
    this.deletedItem.oneDayPercentChange = this.selectedCell.cell.row.rowData.oneDayPercentChange;
    this.deletedItem.sevenDaysPercentChange = this.selectedCell.cell.row.rowData.sevenDaysPercentChange;
    this.deletedItem.usdPrice = this.selectedCell.cell.row.rowData.usdPrice;

    this.selectedCell = {};
    this.snack.show();
  }

  public updateRow(obj) {
    const updatedItem = obj.row.rowData;
    updatedItem.holdings = obj.newValue;

    this.updateItem(updatedItem);
  }

}
