import { HistoricalPrice } from './interfaces';

/**
 * Self-contained market simulator used by the mock data service.
 *
 * Every value is derived from the coin symbol and the current timestamp, so prices
 * move on every tick, stay consistent between screens, and survive a page reload
 * without any third-party service.
 */

const DAY_MS = 86_400_000;
const HOUR_MS = 3_600_000;
const HISTORY_DAYS = 900;

export interface MockCoin {
   id: string;
   symbol: string;
   fullName: string;
   proofType: string;
   algorithm: string;
   basePrice: number;
   supply: number;
   volatility: number;
   imageUrl: string;
   seed: number;
   phase: number;
}

export interface MarketSnapshot {
   price: number;
   change24Hour: number;
   changePct24Hour: number;
   high24Hour: number;
   volume24Hour: number;
   mktcap: number;
}

type CoinSeed = readonly [
   symbol: string,
   fullName: string,
   proofType: string,
   algorithm: string,
   basePrice: number,
   supply: number,
   volatility: number
];

const COIN_SEEDS: readonly CoinSeed[] = [
   ['BTC', 'Bitcoin', 'PoW', 'SHA256', 64250, 19_760_000, 0.028],
   ['ETH', 'Ethereum', 'PoS', 'Ethash', 3120, 120_400_000, 0.032],
   ['USDT', 'Tether', 'N/A', 'N/A', 1, 112_000_000_000, 0.0008],
   ['BNB', 'Binance Coin', 'PoSA', 'N/A', 585, 145_900_000, 0.031],
   ['SOL', 'Solana', 'PoH', 'PoH', 147, 466_000_000, 0.048],
   ['USDC', 'USD Coin', 'N/A', 'N/A', 1, 34_000_000_000, 0.0008],
   ['XRP', 'XRP', 'N/A', 'N/A', 0.53, 55_600_000_000, 0.037],
   ['DOGE', 'Dogecoin', 'PoW', 'Scrypt', 0.124, 145_000_000_000, 0.052],
   ['TON', 'Toncoin', 'PoS', 'N/A', 6.9, 3_470_000_000, 0.044],
   ['ADA', 'Cardano', 'PoS', 'Ouroboros', 0.42, 35_900_000_000, 0.039],
   ['AVAX', 'Avalanche', 'PoS', 'Snowman', 27.4, 400_000_000, 0.046],
   ['SHIB', 'Shiba Inu', 'N/A', 'N/A', 0.0000172, 589_000_000_000_000, 0.058],
   ['TRX', 'TRON', 'DPoS', 'DPoS', 0.126, 87_100_000_000, 0.03],
   ['DOT', 'Polkadot', 'NPoS', 'BABE', 5.9, 1_460_000_000, 0.041],
   ['LINK', 'Chainlink', 'N/A', 'N/A', 13.8, 587_000_000, 0.044],
   ['MATIC', 'Polygon', 'PoS', 'Plasma', 0.57, 9_900_000_000, 0.045],
   ['BCH', 'Bitcoin Cash', 'PoW', 'SHA256', 398, 19_760_000, 0.036],
   ['LTC', 'Litecoin', 'PoW', 'Scrypt', 71.5, 74_800_000, 0.033],
   ['NEAR', 'NEAR Protocol', 'PoS', 'Nightshade', 4.6, 1_090_000_000, 0.049],
   ['UNI', 'Uniswap', 'N/A', 'N/A', 8.1, 600_000_000, 0.043],
   ['ICP', 'Internet Computer', 'PoS', 'Threshold Relay', 9.3, 470_000_000, 0.05],
   ['LEO', 'UNUS SED LEO', 'N/A', 'N/A', 5.8, 925_000_000, 0.018],
   ['APT', 'Aptos', 'PoS', 'AptosBFT', 7.2, 480_000_000, 0.051],
   ['DAI', 'Dai', 'N/A', 'N/A', 1, 5_300_000_000, 0.001],
   ['ETC', 'Ethereum Classic', 'PoW', 'Ethash', 21.4, 147_000_000, 0.04],
   ['XLM', 'Stellar', 'SCP', 'SCP', 0.104, 29_400_000_000, 0.036],
   ['ATOM', 'Cosmos', 'PoS', 'Tendermint', 7.4, 390_000_000, 0.043],
   ['XMR', 'Monero', 'PoW', 'RandomX', 163, 18_440_000, 0.031],
   ['OKB', 'OKB', 'N/A', 'N/A', 42.6, 60_000_000, 0.035],
   ['FIL', 'Filecoin', 'PoRep', 'PoRep', 4.1, 590_000_000, 0.048],
   ['HBAR', 'Hedera', 'HH', 'Hashgraph', 0.078, 35_000_000_000, 0.042],
   ['CRO', 'Cronos', 'PoA', 'N/A', 0.093, 26_600_000_000, 0.04],
   ['ARB', 'Arbitrum', 'N/A', 'N/A', 0.79, 2_650_000_000, 0.052],
   ['VET', 'VeChain', 'PoA', 'PoA', 0.026, 72_700_000_000, 0.044],
   ['IMX', 'Immutable', 'N/A', 'N/A', 1.62, 1_490_000_000, 0.053],
   ['OP', 'Optimism', 'N/A', 'N/A', 1.71, 1_050_000_000, 0.054],
   ['INJ', 'Injective', 'PoS', 'Tendermint', 21.7, 88_000_000, 0.056],
   ['GRT', 'The Graph', 'PoS', 'N/A', 0.168, 9_500_000_000, 0.047],
   ['AAVE', 'Aave', 'N/A', 'N/A', 94, 14_800_000, 0.046],
   ['ALGO', 'Algorand', 'PPoS', 'PPoS', 0.135, 8_100_000_000, 0.041],
   ['QNT', 'Quant', 'N/A', 'N/A', 78.5, 14_600_000, 0.042],
   ['LDO', 'Lido DAO', 'N/A', 'N/A', 1.84, 892_000_000, 0.05],
   ['STX', 'Stacks', 'PoX', 'PoX', 1.72, 1_460_000_000, 0.055],
   ['RUNE', 'THORChain', 'PoS', 'Tendermint', 4.3, 335_000_000, 0.057],
   ['THETA', 'Theta Network', 'PoS', 'N/A', 1.42, 1_000_000_000, 0.045],
   ['EGLD', 'MultiversX', 'SPoS', 'SPoS', 32.6, 27_000_000, 0.047],
   ['FTM', 'Fantom', 'PoS', 'Lachesis', 0.53, 2_800_000_000, 0.055],
   ['SAND', 'The Sandbox', 'N/A', 'N/A', 0.31, 2_280_000_000, 0.051],
   ['MANA', 'Decentraland', 'N/A', 'N/A', 0.36, 1_910_000_000, 0.05],
   ['AXS', 'Axie Infinity', 'PoS', 'N/A', 5.9, 148_000_000, 0.054],
   ['XTZ', 'Tezos', 'LPoS', 'LPoS', 0.79, 990_000_000, 0.039],
   ['FLOW', 'Flow', 'PoS', 'N/A', 0.62, 1_540_000_000, 0.048],
   ['CHZ', 'Chiliz', 'PoS', 'N/A', 0.072, 8_890_000_000, 0.049],
   ['EOS', 'EOS', 'DPoS', 'DPoS', 0.62, 1_100_000_000, 0.043],
   ['NEO', 'Neo', 'dBFT', 'dBFT', 11.3, 70_500_000, 0.042],
   ['KAVA', 'Kava', 'PoS', 'Tendermint', 0.51, 1_080_000_000, 0.048],
   ['MKR', 'Maker', 'N/A', 'N/A', 2380, 907_000, 0.041],
   ['SNX', 'Synthetix', 'N/A', 'N/A', 1.94, 327_000_000, 0.052],
   ['CRV', 'Curve DAO', 'N/A', 'N/A', 0.29, 1_180_000_000, 0.056],
   ['ZEC', 'Zcash', 'PoW', 'Equihash', 22.8, 16_300_000, 0.041],
   ['DASH', 'Dash', 'PoW', 'X11', 27.5, 11_800_000, 0.04],
   ['BAT', 'Basic Attention Token', 'N/A', 'N/A', 0.19, 1_490_000_000, 0.044],
   ['ENJ', 'Enjin Coin', 'N/A', 'N/A', 0.17, 1_640_000_000, 0.047],
   ['ZIL', 'Zilliqa', 'PoW', 'Ethash', 0.017, 17_400_000_000, 0.05],
   ['WAVES', 'Waves', 'LPoS', 'LPoS', 1.31, 118_000_000, 0.052],
   ['IOTA', 'IOTA', 'N/A', 'Tangle', 0.16, 3_100_000_000, 0.046],
   ['COMP', 'Compound', 'N/A', 'N/A', 43.2, 8_700_000, 0.05],
   ['1INCH', '1inch Network', 'N/A', 'N/A', 0.35, 1_180_000_000, 0.053],
   ['GALA', 'Gala', 'N/A', 'N/A', 0.026, 34_500_000_000, 0.058],
   ['ANKR', 'Ankr', 'N/A', 'N/A', 0.031, 10_000_000_000, 0.054]
];

export const MOCK_COINS: readonly MockCoin[] = COIN_SEEDS.map(createCoin);

const COINS_BY_SYMBOL = new Map(MOCK_COINS.map(coin => [coin.symbol, coin]));
const seriesCache = new Map<string, PriceSeries>();

/** Returns a catalog coin, or `undefined` when the symbol is not listed. */
export function findMockCoin(symbol: string): MockCoin | undefined {
   return COINS_BY_SYMBOL.get(symbol.trim().toUpperCase());
}

/**
 * Returns a catalog coin, falling back to one synthesized from the symbol itself so
 * portfolios saved with symbols outside the catalog still render.
 */
export function resolveMockCoin(symbol: string): MockCoin {
   const normalized = symbol.trim().toUpperCase() || 'COIN';
   const known = COINS_BY_SYMBOL.get(normalized);
   if (known) {
      return known;
   }

   const random = createRandom(hashString(normalized));

   return createCoin([
      normalized,
      normalized,
      'N/A',
      'N/A',
      roundPrice(0.05 + random() * 220),
      Math.round(1_000_000 + random() * 4_000_000_000),
      0.03 + random() * 0.03
   ]);
}

/** Price of a coin at an arbitrary point in time. */
export function priceAt(coin: MockCoin, time: number): number {
   const dayIndex = Math.floor(time / DAY_MS);
   const fraction = (time - dayIndex * DAY_MS) / DAY_MS;
   const previous = multiplierAt(coin, dayIndex - 1);
   const current = multiplierAt(coin, dayIndex);
   const trend = previous + (current - previous) * fraction;

   return roundPrice(coin.basePrice * trend * intradayFactor(coin, time));
}

/** Current price plus the 24 hour statistics the grids and cards display. */
export function marketSnapshot(coin: MockCoin, now: number = Date.now()): MarketSnapshot {
   const price = priceAt(coin, now);
   const previous = priceAt(coin, now - DAY_MS);

   let high = price;
   for (let hour = 1; hour <= 24; hour++) {
      const sample = priceAt(coin, now - hour * HOUR_MS);
      high = Math.max(high, sample);
   }

   const random = createRandom((coin.seed ^ Math.floor(now / DAY_MS)) >>> 0);

   return {
      price,
      change24Hour: roundPrice(price - previous),
      changePct24Hour: previous > 0 ? ((price - previous) / previous) * 100 : 0,
      high24Hour: high,
      volume24Hour: coin.supply * (0.004 + random() * 0.028),
      mktcap: price * coin.supply
   };
}

/** Daily OHLC candles ending with the current, partially formed day. */
export function dailyCandles(coin: MockCoin, days: number, now: number = Date.now()): HistoricalPrice[] {
   const today = Math.floor(now / DAY_MS);
   const candles: HistoricalPrice[] = [];

   for (let offset = days; offset >= 0; offset--) {
      const dayIndex = today - offset;
      const start = dayIndex * DAY_MS;
      const end = Math.min(start + DAY_MS - 1, now);
      const random = createRandom((coin.seed ^ dayIndex) >>> 0);

      const open = priceAt(coin, start);
      const close = priceAt(coin, end);
      let high = Math.max(open, close);
      let low = Math.min(open, close);

      for (let time = start; time < end; time += 2 * HOUR_MS) {
         const sample = priceAt(coin, time);
         high = Math.max(high, sample);
         low = Math.min(low, sample);
      }

      const wick = 1 + random() * 0.018;
      high = roundPrice(high * wick);
      low = roundPrice(low / wick);

      const volumefrom = coin.supply * (0.003 + random() * 0.022);

      candles.push({
         time: new Date(start),
         open,
         high,
         low,
         close,
         volumefrom,
         volumeto: volumefrom * ((high + low) / 2)
      });
   }

   return candles;
}

interface PriceSeries {
   firstDay: number;
   multipliers: number[];
}

function createCoin(seed: CoinSeed): MockCoin {
   const [symbol, fullName, proofType, algorithm, basePrice, supply, volatility] = seed;
   const hash = hashString(symbol);

   return {
      id: symbol,
      symbol,
      fullName,
      proofType,
      algorithm,
      basePrice,
      supply,
      volatility,
      imageUrl: createCoinIcon(symbol, hash),
      seed: hash,
      phase: (hash % 6283) / 1000
   };
}

/**
 * Inline SVG badge, so the app ships its own coin artwork instead of hot-linking one.
 * Base64 rather than percent encoding: `igx-avatar` pushes `src` through `encodeURI`,
 * which would escape the `%` of a percent-encoded payload a second time.
 */
function createCoinIcon(symbol: string, hash: number): string {
   const label = symbol.replace(/[^A-Za-z0-9]/g, '').slice(0, 4) || 'N/A';
   const hue = hash % 360;
   const fontSize = label.length > 3 ? 17 : label.length > 2 ? 21 : 26;
   const baseline = 32 + Math.round(fontSize * 0.35);
   const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
      + `<circle cx="32" cy="32" r="31" fill="hsl(${hue}, 58%, 45%)" stroke="hsl(${hue}, 58%, 32%)" stroke-width="2"/>`
      + `<text x="32" y="${baseline}" text-anchor="middle" fill="#ffffff"`
      + ` font-family="Segoe UI, Roboto, Arial, sans-serif" font-size="${fontSize}" font-weight="700">${label}</text>`
      + '</svg>';

   return `data:image/svg+xml;base64,${btoa(svg)}`;
}

function multiplierAt(coin: MockCoin, dayIndex: number): number {
   const series = priceSeries(coin, dayIndex);
   const index = clamp(dayIndex - series.firstDay, 0, series.multipliers.length - 1);

   return series.multipliers[index];
}

function priceSeries(coin: MockCoin, dayIndex: number): PriceSeries {
   const cached = seriesCache.get(coin.symbol);
   if (cached && dayIndex >= cached.firstDay && dayIndex < cached.firstDay + cached.multipliers.length) {
      return cached;
   }

   const series = buildPriceSeries(coin, dayIndex);
   seriesCache.set(coin.symbol, series);

   return series;
}

/**
 * Seeded random walk with a couple of slow cycles layered on top, normalized so that
 * the requested day sits exactly on the coin's base price.
 */
function buildPriceSeries(coin: MockCoin, dayIndex: number): PriceSeries {
   const random = createRandom(coin.seed);
   const drift = (random() - 0.45) * 0.0015;
   const multipliers: number[] = [];
   let value = 1;

   for (let day = 0; day <= HISTORY_DAYS + 1; day++) {
      const cycle = 1
         + 0.18 * Math.sin(day / 90 + coin.phase)
         + 0.07 * Math.sin(day / 23 + coin.phase * 2);
      multipliers.push(value * cycle);
      value = Math.max(value * (1 + drift + (random() * 2 - 1) * coin.volatility), 0.05);
   }

   const anchor = multipliers[HISTORY_DAYS];

   return {
      firstDay: dayIndex - HISTORY_DAYS,
      multipliers: multipliers.map(multiplier => multiplier / anchor)
   };
}

/**
 * Smooth intraday movement, scaled by how volatile the coin is so that stablecoins stay
 * flat. The fastest term keeps a 15 second refresh visibly alive.
 */
function intradayFactor(coin: MockCoin, time: number): number {
   const hours = time / HOUR_MS;
   const amplitude = clamp(coin.volatility / 0.04, 0.15, 1.5);
   const wave = 0.0100 * Math.sin(hours * 0.83 + coin.phase)
      + 0.0040 * Math.sin(hours * 6.10 + coin.phase * 2)
      + 0.0012 * Math.sin(hours * 47.0 + coin.phase * 3)
      + 0.0008 * Math.sin(hours * 520 + coin.phase * 5);

   return 1 + wave * amplitude;
}

function roundPrice(price: number): number {
   const absolute = Math.abs(price);
   if (absolute >= 1000) {
      return Math.round(price * 100) / 100;
   }
   if (absolute >= 1) {
      return Math.round(price * 10_000) / 10_000;
   }

   return Math.round(price * 100_000_000) / 100_000_000;
}

function clamp(value: number, min: number, max: number): number {
   return Math.min(Math.max(value, min), max);
}

/** FNV-1a, so a symbol always maps to the same market behaviour. */
function hashString(value: string): number {
   let hash = 0x811c9dc5;
   for (let index = 0; index < value.length; index++) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 0x01000193);
   }

   return hash >>> 0;
}

/** mulberry32 - small, fast, and deterministic for a given seed. */
function createRandom(seed: number): () => number {
   let state = seed >>> 0;

   return () => {
      state = (state + 0x6d2b79f5) >>> 0;
      let value = Math.imul(state ^ (state >>> 15), 1 | state);
      value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;

      return ((value ^ (value >>> 14)) >>> 0) / 4_294_967_296;
   };
}
