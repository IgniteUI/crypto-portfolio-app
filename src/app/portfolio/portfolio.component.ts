import {
  Component,
  OnInit,
  NgModule,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group,
  ViewChild } from '@angular/core';

import { IgxFilterOptions, IgxListItemComponent } from 'igniteui-angular/main';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { BlockItem, ItemService } from '../block-item.service';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public searchCrypto: string;
  public blockItemsCollection: AngularFireList<BlockItem>;
  public blockItems: Observable<BlockItem[]>;

  constructor(private dataService: ItemService) {}

  ngOnInit() {
    this.blockItemsCollection = this.dataService.getItemsList();
    this.blockItems = this.blockItemsCollection.valueChanges();
    debugger;
  }

  private addItem() {
    const item = new BlockItem();
    item.coinName = 'Sub';
    item.holdings = 2000;
    this.dataService.createItem(item);
  }

}
