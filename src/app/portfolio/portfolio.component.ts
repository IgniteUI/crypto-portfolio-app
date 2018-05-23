import { Component, OnInit, NgModule, ViewChild, ViewEncapsulation, Input} from '@angular/core';
import { trigger, transition, style, animate, query, stagger, group, keyframes} from '@angular/animations';

import { IgxFilterOptions, IgxListItemComponent, IgxSnackbarComponent } from 'igniteui-angular/main';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { BlockItem, ItemService } from '../block-item.service';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {

  public searchCrypto: string;
  public blockItemsCollection: AngularFireList<BlockItem>;
  public blockItems: Observable<BlockItem[]>;
  public selectedRow;
  public selectedCell;

  @ViewChild('snack') public snack: IgxSnackbarComponent;

  public newItem: BlockItem = new BlockItem();
  public deletedItem;

  constructor(private dataService: ItemService, private readonly afs: AngularFirestore) {

  }

  ngOnInit() {
    this.blockItemsCollection = this.dataService.getItemsList();
    this.blockItems = this.blockItemsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => ({ key: a.payload.key, ...a.payload.val()
      })))
    );
  }

  private addItem() {
    this.dataService.createItem(this.newItem);
    this.newItem = new BlockItem();
  }

  private updateItem(item) {
    this.dataService.updateItem(item.key, item);
  }

  private deleteItem(item) {
    this.dataService.deleteItem(item.key);
  }

  public selectCell(event) {
    this.selectedCell = event;
  }

  deleteRow(item) {
    this.selectedRow = Object.assign({}, this.selectedCell.row);
    this.deleteItem(this.selectedCell.cell.row.rowData);
    this.deletedItem = this.selectedCell.cell.row.rowData;

    this.selectedCell = {};
    this.snack.show();
    // this.snax.message = `Row with ID ${this.selectedRow.rowData.id} was deleted`;
    // this.snax.show();
  }

  updateRow(obj) {
    const updatedItem = obj.row.rowData;
    updatedItem.holdings = obj.newValue;

    this.updateItem(updatedItem);
  }

  public restore() {
    this.dataService.createItem(this.deletedItem);
    this.snack.hide();
  }
}
