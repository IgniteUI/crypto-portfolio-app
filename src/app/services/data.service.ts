import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { offlineData } from '../../assets/offlineData';
import { flattenObject, isRecord, readNumber, readString, sortDataByKey, UnknownRecord } from '../core/utils';
import { Observable } from 'rxjs';
import { BlockItem, CoinItem, CryptoLookup, HistoricalPrice, HistoricalSeries } from '../core/interfaces';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {
   private readonly http = inject(HttpClient);
   private readonly apiKey = 'c6d27a61006e744bde9f940f6a6ef693aa724d8682b47c1bd26d361befc13faa';
   private readonly baseUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=${this.apiKey}`;
   private readonly allCoinsDataUrl = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;
   private readonly histoDataUrl = 'https://min-api.cryptocompare.com/data/histoday?fsym=';
   private readonly priceMultiFullUrl = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=';

   getData(): Observable<CoinItem[]> {
      return this.http.get<unknown>(this.baseUrl).pipe(map(result => this.transformData(result)));
   }

   getSpecificCoinData(symbol: string): Observable<BlockItem> {
      return this.http.get<unknown>(this.priceMultiFullUrl + symbol + '&tsyms=USD&api_key=' + this.apiKey)
         .pipe(map(result => {
            const root = isRecord(result) ? result : {};
            const raw = isRecord(root['RAW']) ? root['RAW'] : {};
            const symbolData = isRecord(raw[symbol]) ? raw[symbol] : {};
            const usdData = isRecord(symbolData['USD']) ? symbolData['USD'] : {};
            return this.toBlockItem(flattenObject(usdData), symbol);
         }));
   }

   getHistoricalData(symbol: string): Observable<HistoricalSeries> {
      return this.http.get<unknown>(this.histoDataUrl + symbol + '&tsym=USD&limit=730&api_key=' + this.apiKey)
         .pipe(map(result => ({ data: this.toHistoricalPrices(result), symbol })));
   }

   getCryptoIdFromSymbol(symbol: string): Observable<CryptoLookup | null> {
      return this.http.get<unknown>(this.allCoinsDataUrl)
         .pipe(map(result => {
            const root = isRecord(result) ? result : {};
            const data = isRecord(root['Data']) ? root['Data'] : {};
            const crypto = isRecord(data[symbol]) ? data[symbol] : null;
            const name = crypto ? readString(crypto, 'Name') : '';
            return name ? { Name: name } : null;
         }));
   }

   private transformData(value: unknown): CoinItem[] {
      const response = isRecord(value) ? value : {};
      const data = response['Data'];

      if (response['Message'] === 'Success' && response['HasWarning'] === false && Array.isArray(data) && data.length > 0) {
         const coins = data
            .filter(isRecord)
            .map((item, index) => this.toCoinItem(flattenObject(item), index + 1));
         return sortDataByKey(coins, 'rank');
      }

      const fallback = offlineData.map((item, index) => Object.assign(new CoinItem(), item, {
         id: String(item.id),
         name: item.fullName,
         rank: item.rank || index + 1
      }));
      return sortDataByKey(fallback, 'rank');
   }

   private toCoinItem(record: UnknownRecord, rank: number): CoinItem {
      const changePct24Hour = readNumber(record, 'CHANGEPCT24HOUR');
      return Object.assign(new CoinItem(), {
         id: readString(record, 'ID'),
         name: readString(record, 'FROMSYMBOL'),
         fullName: readString(record, 'FULLNAME'),
         price: readNumber(record, 'PRICE'),
         supply: readNumber(record, 'SUPPLY'),
         changePct24Hour,
         dailyScale: changePct24Hour >= 0,
         proofType: readString(record, 'PROOFTYPE'),
         algorithm: readString(record, 'ALGORITHM'),
         rank,
         imageUrl: readString(record, 'IMAGEURL'),
         change24Hour: readNumber(record, 'CHANGE24HOUR'),
         high24Hour: readNumber(record, 'HIGH24HOUR'),
         volume24Hour: readNumber(record, 'VOLUME24HOUR'),
         mktcap: readNumber(record, 'MKTCAP')
      });
   }

   private toBlockItem(record: UnknownRecord, symbol: string): BlockItem {
      return Object.assign(new BlockItem(), {
         fullName: readString(record, 'FULLNAME', symbol),
         name: readString(record, 'FROMSYMBOL', symbol),
         supply: readNumber(record, 'SUPPLY'),
         changePct24Hour: readNumber(record, 'CHANGEPCT24HOUR'),
         price: readNumber(record, 'PRICE'),
         imageUrl: readString(record, 'IMAGEURL')
      });
   }

   private toHistoricalPrices(value: unknown): HistoricalPrice[] {
      const response = isRecord(value) ? value : {};
      const data = response['Data'];
      const rows = Array.isArray(data)
         ? data
         : isRecord(data) && Array.isArray(data['Data'])
            ? data['Data']
            : [];

      return rows.filter(isRecord).map(row => ({
         time: new Date(readNumber(row, 'time') * 1000),
         open: readNumber(row, 'open'),
         high: readNumber(row, 'high'),
         low: readNumber(row, 'low'),
         close: readNumber(row, 'close'),
         volumefrom: readNumber(row, 'volumefrom'),
         volumeto: readNumber(row, 'volumeto')
      }));
   }
}
