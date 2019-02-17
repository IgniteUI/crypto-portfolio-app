import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { BlockItem } from '../core/interfaces';

@Injectable()
export class ItemService {

   userId: string;
   items: AngularFireList<BlockItem> = null;

   constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
      this.auth.authState.subscribe(user => {
         if (user) {
            this.userId = user.uid;
         }
      });
   }

   // Return an observable list.
   public getItemsList(): AngularFireList<BlockItem> {
      if (!this.userId) { return; }
      this.items = this.db.list(`items/${this.userId}`);
      return this.items;
   }

   // Creates a new record on the list, using the Realtime Database's push-ids.
   createItem(item: BlockItem) {
      this.items = this.getItemsList();
      this.items.push(item);

      const listObservable = this.items.snapshotChanges();
      listObservable.subscribe();
   }

   // Non-destructive update
   updateItem(key: string, item: BlockItem): void {
      this.items.update(key, item).catch(error => console.log(error));
   }

   // Deletes the item by key. If no parameter is provided, the entire list will be deleted.
   deleteItem(key: string): void {
      this.items.remove(key).catch(error => console.log(error));
   }
}