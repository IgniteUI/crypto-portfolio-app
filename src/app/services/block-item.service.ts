import { computed, Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Database, ref, push, update, remove, onValue } from '@angular/fire/database';
import { Auth, authState } from '@angular/fire/auth';
import { BlockItem } from '../core/interfaces';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { isRecord, readNumber, readString } from '../core/utils';

@Injectable({ providedIn: 'root' })
export class ItemService {
   private readonly database = inject(Database);
   private readonly auth = inject(Auth);
   private readonly user = toSignal(authState(this.auth), { initialValue: null });
   private readonly userId = computed(() => this.user()?.uid ?? null);

   // Return an observable for the items list - uses reactive approach
   public getItemsList(): Observable<BlockItem[]> {
      return authState(this.auth).pipe(
         switchMap(user => {
            if (!user) {
               return of([]);
            }

            // Create observable for Firebase data
            return new Observable<BlockItem[]>(observer => {
               const itemsRef = ref(this.database, `items/${user.uid}`);
               const unsubscribe = onValue(itemsRef, (snapshot) => {
                  const data: unknown = snapshot.val();
                  const items = isRecord(data)
                     ? Object.entries(data).flatMap(([key, item]) => this.toBlockItem(item, key))
                     : [];
                  observer.next(items);
               });
               return unsubscribe;
            });
         })
      );
   }

   // Creates a new record on the list
   createItem(item: BlockItem): void {
      const userId = this.userId();
      if (!userId) { return; }

      const payload = Object.assign(new BlockItem(), item);
      delete payload.key;
      const itemsRef = ref(this.database, `items/${userId}`);
      void push(itemsRef, { ...payload, total: item.holdings * item.price });
   }

   // Non-destructive update
   updateItem(key: string, item: BlockItem): void {
      const userId = this.userId();
      if (!userId) { return; }
      const itemRef = ref(this.database, `items/${userId}/${key}`);
      void update(itemRef, item).catch((error: unknown) => console.error(error));
   }

   // Deletes the item by key
   deleteItem(key: string): void {
      const userId = this.userId();
      if (!userId) { return; }
      const itemRef = ref(this.database, `items/${userId}/${key}`);
      void remove(itemRef).catch((error: unknown) => console.error(error));
   }

   private toBlockItem(value: unknown, key: string): BlockItem[] {
      if (!isRecord(value)) {
         return [];
      }

      return [Object.assign(new BlockItem(), {
         key,
         fullName: readString(value, 'fullName'),
         holdings: readNumber(value, 'holdings'),
         name: readString(value, 'name'),
         supply: readNumber(value, 'supply'),
         changePct24Hour: readNumber(value, 'changePct24Hour'),
         price: readNumber(value, 'price'),
         imageUrl: readString(value, 'imageUrl'),
         total: readNumber(value, 'total')
      })];
   }
}
