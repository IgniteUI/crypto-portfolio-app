import { Injectable } from '@angular/core';
import { Observable, defer, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BlockItem, CoinItem, CryptoLookup, HistoricalSeries } from '../core/interfaces';
import {
   MOCK_COINS,
   MockCoin,
   dailyCandles,
   findMockCoin,
   marketSnapshot,
   resolveMockCoin
} from '../core/mock-market';
import { DataService } from './data.service';

/** Days of history the volatility chart asks for, matching the live API request. */
const HISTORY_DAYS = 730;

/** Fake round trip, so loading indicators and refresh spinners still have something to show. */
const LATENCY_MS = 180;

/**
 * Offline replacement for the CryptoCompare API. Data is generated on the fly by the
 * simulator in `core/mock-market.ts`, which keeps the app - and the deployed demo -
 * free of third-party API keys, rate limits, and outages.
 */
@Injectable()
export class MockDataService extends DataService {
   override getData(): Observable<CoinItem[]> {
      return this.respond(() => {
         const now = Date.now();

         return [...MOCK_COINS]
            .map(coin => ({ coin, snapshot: marketSnapshot(coin, now) }))
            .sort((left, right) => right.snapshot.mktcap - left.snapshot.mktcap)
            .map(({ coin, snapshot }, index) => Object.assign(new CoinItem(), {
               id: coin.id,
               name: coin.symbol,
               fullName: coin.fullName,
               price: snapshot.price,
               supply: coin.supply,
               changePct24Hour: snapshot.changePct24Hour,
               dailyScale: snapshot.changePct24Hour >= 0,
               proofType: coin.proofType,
               algorithm: coin.algorithm,
               rank: index + 1,
               imageUrl: coin.imageUrl,
               change24Hour: snapshot.change24Hour,
               high24Hour: snapshot.high24Hour,
               volume24Hour: snapshot.volume24Hour,
               mktcap: snapshot.mktcap
            }));
      });
   }

   override getSpecificCoinData(symbol: string): Observable<BlockItem> {
      return this.respond(() => this.toBlockItem(resolveMockCoin(symbol)));
   }

   override getHistoricalData(symbol: string): Observable<HistoricalSeries> {
      return this.respond(() => ({
         data: dailyCandles(resolveMockCoin(symbol), HISTORY_DAYS),
         symbol
      }));
   }

   override getCryptoIdFromSymbol(symbol: string): Observable<CryptoLookup | null> {
      return this.respond(() => {
         const coin = findMockCoin(symbol);

         return coin ? { Name: coin.symbol } : null;
      });
   }

   private toBlockItem(coin: MockCoin): BlockItem {
      const snapshot = marketSnapshot(coin);

      return Object.assign(new BlockItem(), {
         fullName: coin.fullName,
         name: coin.symbol,
         supply: coin.supply,
         changePct24Hour: snapshot.changePct24Hour,
         price: snapshot.price,
         imageUrl: coin.imageUrl
      });
   }

   private respond<T>(factory: () => T): Observable<T> {
      return defer(() => of(factory())).pipe(delay(LATENCY_MS));
   }
}
