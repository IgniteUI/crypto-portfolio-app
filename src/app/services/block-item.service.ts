import { Injectable, inject } from '@angular/core';
import { Database, ref, push, update, remove, onValue } from '@angular/fire/database';
import { Auth, authState } from '@angular/fire/auth';
import { BlockItem } from '../core/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {
   userId: string;
   private database = inject(Database);
   private auth = inject(Auth);

   constructor() {
      authState(this.auth).subscribe(user => {
         if (user) {
            this.userId = user.uid;
         }
      });
   }

   // Return an observable for the items list
   public getItemsList(): Observable<BlockItem[]> {
      return new Observable(observer => {
         // Wait for userId to be available if it's not set yet
         const checkUserId = () => {
            if (this.userId) {
               const itemsRef = ref(this.database, `items/${this.userId}`);
               onValue(itemsRef, (snapshot) => {
                  const data = snapshot.val();
                  const items = data ? Object.keys(data).map(key => ({ ...data[key], key })) : [];
                  observer.next(items);
               });
            } else {
               // If userId is not available yet, wait a bit and try again
               setTimeout(checkUserId, 100);
            }
         };
         checkUserId();
      });
   }

   // Creates a new record on the list
   createItem(item: BlockItem) {
      if (!this.userId) { return; }
      item.total = item.holdings * item.price;
      item.key = null;
      const itemsRef = ref(this.database, `items/${this.userId}`);
      push(itemsRef, item);
   }

   // Non-destructive update
   updateItem(key: string, item: BlockItem): void {
      if (!this.userId) { return; }
      const itemRef = ref(this.database, `items/${this.userId}/${key}`);
      update(itemRef, item).catch(error => console.log(error));
   }

   // Deletes the item by key
   deleteItem(key: string): void {
      if (!this.userId) { return; }
      const itemRef = ref(this.database, `items/${this.userId}/${key}`);
      remove(itemRef).catch(error => console.log(error));
   }
}
