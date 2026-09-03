import { Observable } from 'rxjs';
import { BlockItem, CoinItem, CryptoLookup, HistoricalSeries } from '../core/interfaces';

/**
 * Injection token every screen depends on. The concrete implementation is picked in
 * `app.config.ts`: `MockDataService` by default, `CryptoCompareDataService` when
 * `environment.useMockData` is turned off.
 */
export abstract class DataService {
   /** Top coins by market capitalization. */
   abstract getData(): Observable<CoinItem[]>;

   /** Current market data for a single coin symbol. */
   abstract getSpecificCoinData(symbol: string): Observable<BlockItem>;

   /** Daily OHLC history used by the volatility chart. */
   abstract getHistoricalData(symbol: string): Observable<HistoricalSeries>;

   /** Resolves a user typed symbol, or `null` when the coin is unknown. */
   abstract getCryptoIdFromSymbol(symbol: string): Observable<CryptoLookup | null>;
}
