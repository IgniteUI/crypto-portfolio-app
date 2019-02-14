import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { AngularFirestore } from '@angular/fire/firestore';
import { BlockItem } from '../core/interfaces';

@Injectable()
export class ItemService {

  userId: string;
  items: AngularFireList<BlockItem> = null;

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth, private afs: AngularFirestore) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    });
  }

  // Return an observable list with optional query. You will usually call this from OnInit in a component
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