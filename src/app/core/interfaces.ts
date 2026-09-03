export interface CryptoCoin {
   name: string;
   symbol: string;
}

export interface HistoricalPrice {
   time: Date;
   open: number;
   high: number;
   low: number;
   close: number;
   volumefrom?: number;
   volumeto?: number;
}

export interface HistoricalSeries {
   data: HistoricalPrice[];
   symbol: string;
}

export interface CryptoLookup {
   Name: string;
}

export class CoinItem {
   id = '';                // CoinInfo.Id
   name = '';              // CoinInfo.Name
   fullName = '';          // CoinInfo.FullName
   price = 0;              // RAW.USD.PRICE
   supply = 0;             // RAW.USD.SUPPLY
   changePct24Hour = 0;    // RAW.USD.CHANGEPCT24HOUR
   dailyScale = false;     // RAW.USD.DAILYSCALE
   proofType = '';         // CoinInfo.ProofType
   algorithm = '';         // CoinInfo.Algorithm
   rank = 0;               // CoinInfo.Rank
   imageUrl = '';          // RAW.USD.IMAGEURL
   change24Hour = 0;       // RAW.USD.CHANGE24HOUR(dollars)
   high24Hour = 0;         // RAW.USD.HIGH24HOUR(dollars)
   volume24Hour = 0;       // RAW.USD.VOLUME24HOUR(dollars)
   mktcap = 0;             // RAW.USD.MKTCAP
}

export class BlockItem {
   key?: string;
   fullName = '';
   holdings = 0;
   name = '';
   supply = 0;
   changePct24Hour = 0;
   price = 0;
   imageUrl = '';
   total = 0;
}
