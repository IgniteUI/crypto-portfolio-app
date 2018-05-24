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

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {

  public searchCrypto: string;
  public blockItemsCollection: AngularFireList<BlockItem>;
  public blockItems: any = [];
  public selectedRow;
  public selectedCell;
  private fetchedCoin: any;

  @ViewChild('snack') public snack: IgxSnackbarComponent;
  @ViewChild('snackExists') public snackExists: IgxSnackbarComponent;

  public newItem: BlockItem = new BlockItem();
  public deletedItem: BlockItem = new BlockItem();

  constructor(private blockItemService: ItemService, private dataService: DataService, private readonly afs: AngularFirestore) {

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

  deleteRow(item) {
    this.selectedRow = Object.assign({}, this.selectedCell.row);
    this.deleteItem(this.selectedCell.cell.row.rowData);

    // store deleted data
    this.deletedItem.coinName = this.selectedCell.cell.row.rowData.coinName;
    this.deletedItem.holdings = this.selectedCell.cell.row.rowData.holdings;
    this.deletedItem.cryptoId = this.selectedCell.cell.row.rowData.cryptoId;
    this.deletedItem.coinSymbol = this.selectedCell.cell.row.rowData.coinSymbol;
    this.deletedItem.rank = this.selectedCell.cell.row.rowData.rank;
    this.deletedItem.totalSupply = this.selectedCell.cell.row.rowData.totalSupply;

    this.selectedCell = {};
    this.snack.show();
  }

  updateRow(obj) {
    const updatedItem = obj.row.rowData;
    updatedItem.holdings = obj.newValue;

    this.updateItem(updatedItem);
  }

  public restore() {
    this.blockItemService.createItem(this.deletedItem);
    this.snack.hide();
    this.deletedItem = new BlockItem();
  }

  public findCoin(coin): Observable<any> {
    return this.dataService.cachedData.map(res => {
      const fCoin = res.filter(item => item.symbol === coin);
      debugger;
      // Check coin existence
      if (fCoin[0]) {
        this.newItem.coinSymbol = this.newItem.coinSymbol.toUpperCase();
        this.newItem.coinName = fCoin[0].name;
        this.newItem.cryptoId = fCoin[0].id;
        this.newItem.rank = fCoin[0].rank;
        this.newItem.totalSupply = fCoin[0].total_supply;

        this.blockItemService.createItem(this.newItem);
        this.newItem = new BlockItem();
      } else {
        this.snackExists.message = 'Coin does not exist!';
        this.snackExists.show();
      }

      return fCoin;
    });
  }

  private checkCoinExistence(coin) {
      const fCoin = this.blockItems.filter(item => item.coinSymbol === coin.toUpperCase());

      if (fCoin.length !== 0) {
        this.snackExists.message = 'Already added!';
        this.snackExists.show();
      } else {
        // find coin and add it if exsist
        this.findCoin(this.newItem.coinSymbol.toUpperCase())
          .subscribe(result => this.fetchedCoin = result);
      }
  }
}
