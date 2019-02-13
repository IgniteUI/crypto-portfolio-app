export interface CryptoCoin {
    name: string;
    symbol: string;
}

export class BlockItem {
    key: string;
    coinName: string;
    holdings: number;
    cryptoId: number;
    coinSymbol: string;
    rank: number;
    totalSupply: number;
    usdPrice: number;
    oneHourPercentChange: number;
    oneDayPercentChange: number;
    sevenDaysPercentChange: number;
    imageUrl: string;
}