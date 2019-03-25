export interface CryptoCoin {
   name: string;
   symbol: string;
}

export class CoinItem {
   id = 0;                 // CoinInfo.Id
   name = '';              // CoinInfo.Name
   fullName = '';          // CoinInfo.FullName
   price = 0;              // RAW.USD.PRICE
   supply = 0;             // RAW.USD.SUPPLY
   changePct24Hour = 0;    // RAW.USD.CHANGEPCT24HOUR
   dailyScale: boolean;            // RAW.USD.DAILYSCALE
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
   fullName = '';
   holdings = 0;
   name = '';
   supply = 0;
   changePct24Hour = 0;
   price = 0;
   imageUrl = '';
}
