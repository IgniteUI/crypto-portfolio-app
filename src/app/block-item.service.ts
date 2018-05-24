import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ItemService {

  userId: string;
  items: AngularFireList<BlockItem> = null; //  list of objects

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth, private afs: AngularFirestore) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    });
  }

  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  public getItemsList(): AngularFireList<BlockItem> {
    if (!this.userId) { return; }
    this.items = this.db.list(`items/${this.userId}`);
    return this.items;
  }

  createItem(item: BlockItem) {
    this.items = this.getItemsList();
    this.items.push(item);

    const listObservable = this.items.snapshotChanges();
    listObservable.subscribe();
  }

  updateItem(key: string, item: BlockItem): void {
    this.items.update(key, item).catch(error => console.log(error));
  }

  deleteItem(key: string): void {
    this.items.remove(key).catch(error => console.log(error));
  }
}


export class BlockItem {
    key: string;
    coinName: string;
    holdings: number;
    cryptoId: number;
    coinSymbol: string;
    rank: number;
    totalSupply: number;
}
