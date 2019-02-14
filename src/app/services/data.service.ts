import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { offlineData } from '../../assets/offlineData';
import { flattenObject } from '../core/utils';

@Injectable()
export class DataService {

  private baseUrl: string;
  private histoDataUrl: string;
  private priceMultiFullUrl: string;
  private allCoinsDataUrl: string;
  private apiKey: string = 'c1f530907ddda7f8da258a43988a86e852dedabef797f7e97c4b35688b9d27bd';

  constructor(private http: HttpClient) {
    this.baseUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=${this.apiKey}`;
    this.allCoinsDataUrl = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;
    this.histoDataUrl = 'https://min-api.cryptocompare.com/data/histoday?fsym=';
    this.priceMultiFullUrl = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=';
  }

  public getData() {
    return this.http.get(this.baseUrl)
      .map(result => {
        let data = [];

        if (result["Message"] === "Success") {
          data = this.transformData(data, result);
        } else {
          data = offlineData;
        }
        return data;
      });
  }

  public getBetweenDaysPrices(symbol: String, forDays: Number) {
    return this.http.get(this.histoDataUrl + symbol + '&tsym=USD&limit=' + forDays + '&api_key=' + this.apiKey)
      .map(result => {
        return result;
      });
  }

  public getSpecificCoinData(symbol) {
    return this.http.get(this.priceMultiFullUrl + symbol + '&tsyms=USD&api_key=' + this.apiKey)
      .map(result => {
        return flattenObject(result["RAW"][symbol]);
      });
  }

  public getCryptoIdFromSymbol(symbol) {
    return this.http.get(this.allCoinsDataUrl)
      .map(result => {
        const crypto = result["Data"][symbol];
        return crypto;
      });
  }

  private transformData(transformedData, data) {
    const indexes = Object.keys(data['Data']);

    for (const idx of indexes) {
      data['Data'][idx].CoinInfo['Rank'] = Number(idx) + 1;

      if (data['Data'][idx].RAW.USD['CHANGEPCT24HOUR'] >= 0) {
        data['Data'][idx].RAW.USD['DAILYSCALE'] = true;
      } else {
        data['Data'][idx].RAW.USD['DAILYSCALE'] = false;
      }
      transformedData.push(flattenObject(data['Data'][idx]));
    }

    return transformedData;
  }
}
