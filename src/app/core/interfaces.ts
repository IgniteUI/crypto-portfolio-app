export interface CryptoCoin {
   name: string;
   symbol: string;
}

export class CoinItem {
   id: number = 0;                 // CoinInfo.Id
   name: string = '';              // CoinInfo.Name
   fullName: string = '';          // CoinInfo.FullName
   price: number = 0;              // RAW.USD.PRICE
   supply: number = 0;             // RAW.USD.SUPPLY
   changePct24Hour: number = 0;    // RAW.USD.CHANGEPCT24HOUR
   dailyScale: boolean;            // RAW.USD.DAILYSCALE
   proofType: string = '';         // CoinInfo.ProofType
   algorithm: string = '';         // CoinInfo.Algorithm
   rank: number = 0;               // CoinInfo.Rank
   imageUrl: string = '';          // RAW.USD.IMAGEURL
   change24Hour: number = 0;       // RAW.USD.CHANGE24HOUR(dollars)
   high24Hour: number = 0;         // RAW.USD.HIGH24HOUR(dollars)
   volume24Hour: number = 0;       // RAW.USD.VOLUME24HOUR(dollars)
   mktcap: number = 0;             // RAW.USD.MKTCAP
}

export class BlockItem {
   fullName: string = '';
   holdings: number = 0;
   name: string = '';
   supply: number = 0;
   changePct24Hour: number = 0;
   price: number = 0;
   imageUrl: string = '';
}