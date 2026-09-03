import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { MOCK_COINS, priceAt, resolveMockCoin } from '../core/mock-market';
import { MockDataService } from './mock-data.service';

describe('MockDataService', () => {
  let service: MockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), MockDataService]
    });

    service = TestBed.inject(MockDataService);
  });

  it('returns the whole catalog ranked by market capitalization', async () => {
    const coins = await firstValueFrom(service.getData());

    expect(coins.length).toBe(MOCK_COINS.length);
    expect(coins.map(coin => coin.rank)).toEqual(coins.map((_, index) => index + 1));
    expect(coins.every(coin => coin.price > 0 && coin.supply > 0)).toBe(true);
    expect(coins.every(coin => coin.dailyScale === (coin.changePct24Hour >= 0))).toBe(true);
  });

  it('ships self-contained coin artwork', async () => {
    const coins = await firstValueFrom(service.getData());

    expect(coins.every(coin => coin.imageUrl.startsWith('data:image/svg+xml;base64,'))).toBe(true);
  });

  it('resolves a known symbol and rejects an unknown one', async () => {
    const known = await firstValueFrom(service.getCryptoIdFromSymbol('btc'));
    const unknown = await firstValueFrom(service.getCryptoIdFromSymbol('NOTACOIN'));

    expect(known).toEqual({ Name: 'BTC' });
    expect(unknown).toBeNull();
  });

  it('returns market data for a single coin', async () => {
    const item = await firstValueFrom(service.getSpecificCoinData('ETH'));

    expect(item.name).toBe('ETH');
    expect(item.fullName).toBe('Ethereum');
    expect(item.price).toBeGreaterThan(0);
  });

  it('returns chronological daily candles with a consistent high and low', async () => {
    const series = await firstValueFrom(service.getHistoricalData('BTC'));
    const { data } = series;

    expect(series.symbol).toBe('BTC');
    expect(data.length).toBe(731);
    expect(data.every(candle => candle.high >= candle.low)).toBe(true);
    expect(data.every(candle => candle.high >= candle.open && candle.low <= candle.close)).toBe(true);
    expect(data.every((candle, index) => index === 0 || candle.time > data[index - 1].time)).toBe(true);
  });

  it('generates prices that move over time but stay reproducible', () => {
    const coin = resolveMockCoin('BTC');
    const now = Date.now();

    expect(priceAt(coin, now)).toBe(priceAt(coin, now));
    expect(priceAt(coin, now)).not.toBe(priceAt(coin, now + 60_000));
    expect(priceAt(coin, now)).toBeGreaterThan(0);
  });
});
