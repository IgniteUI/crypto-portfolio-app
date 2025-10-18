import { Injectable, inject } from '@angular/core';
import { Database, ref, push, update, remove, onValue } from '@angular/fire/database';
import { Auth, authState } from '@angular/fire/auth';
import { BlockItem } from '../core/interfaces';
import { Observable } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

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

   // Return an observable for the items list - uses reactive approach
   public getItemsList(): Observable<BlockItem[]> {
      return authState(this.auth).pipe(
         filter(user => !!user?.uid), // Only proceed when user is authenticated
         switchMap(user => {
            // Create observable for Firebase data
            return new Observable<BlockItem[]>(observer => {
               const itemsRef = ref(this.database, `items/${user.uid}`);
               const unsubscribe = onValue(itemsRef, (snapshot) => {
                  const data = snapshot.val();
                  const items = data ? Object.keys(data).map(key => ({ ...data[key], key })) : [];
                  observer.next(items);
               });
               return unsubscribe;
            });
         })
      );
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
