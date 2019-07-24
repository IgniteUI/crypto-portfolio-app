import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { offlineData } from '../../assets/offlineData';
import { flattenObject } from '../core/utils';
import { Observable } from 'rxjs';
import { sortDataByKey, fillFromJSON } from '../core/utils';
import { CoinItem, BlockItem } from '../core/interfaces';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

   private apiKey = 'c1f530907ddda7f8da258a43988a86e852dedabef797f7e97c4b35688b9d27bd';
   private baseUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=${this.apiKey}`;
   private allCoinsDataUrl = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;
   private histoDataUrl = 'https://min-api.cryptocompare.com/data/histoday?fsym=';
   private priceMultiFullUrl = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=';
   coins: CoinItem[];

   constructor(private http: HttpClient) { }

   getData(): Observable<CoinItem[]> {
      return this.http.get(this.baseUrl)
         .map(result => {
            return this.transformData(result);
         })
         .publishReplay(1, 300000)
         .refCount();
   }

   getSpecificCoinData(symbol): Observable<BlockItem> {
      return this.http.get(this.priceMultiFullUrl + symbol + '&tsyms=USD&api_key=' + this.apiKey)
         .map(result => {
            const returnedCoin = flattenObject(result['RAW'][symbol]['USD']);
            const coin = new BlockItem();
            fillFromJSON(coin, returnedCoin);
            return coin;
         });
   }

   getBetweenDaysPrices(symbol: String, forDays: Number): Observable<any> {
      return this.http.get(this.histoDataUrl + symbol + '&tsym=USD&limit=' + forDays + '&api_key=' + this.apiKey)
         .map(result => {
            return result;
         });
   }

   getCryptoIdFromSymbol(symbol): Observable<any[]> {
      return this.http.get(this.allCoinsDataUrl)
         .map(result => {
            const crypto = result['Data'][symbol];
            return crypto;
         });
   }

   private transformData(data) {
      const transformedData = [];
      this.coins = [];

      if (data['Message'] === 'Success' && data['HasWarning'] === false && data['Data'].length !== 0) {
         const indexes = Object.keys(data['Data']);

         for (const idx of indexes) {
            const newCoin = new CoinItem();
            transformedData.push(flattenObject(data['Data'][idx]));
            fillFromJSON(newCoin, transformedData[idx]);

            if (newCoin.changePct24Hour >= 0) {
               newCoin.dailyScale = true;
            } else {
               newCoin.dailyScale = false;
            }

            newCoin.rank = Number(idx) + 1;
            this.coins.push(newCoin);
         }
      } else {
         for (let i = 0; i < offlineData.length; i++) {
            const coin = new CoinItem();
            fillFromJSON(coin, offlineData[i]);
            this.coins.push(coin);
         }
      }

      return sortDataByKey(this.coins, 'rank');
   }
}
