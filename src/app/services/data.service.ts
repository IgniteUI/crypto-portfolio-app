import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { offlineData } from '../../assets/offlineData';
import { flattenObject } from '../core/utils';

@Injectable()
export class DataService {

  public cachedData: any;

  constructor(private _http: HttpClient) { }

  public getData() {
    if (!this.cachedData) {
      this.cachedData = this._http.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=c1f530907ddda7f8da258a43988a86e852dedabef797f7e97c4b35688b9d27bd')
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

    return this.cachedData;
  }

  public getBetweenDaysPrices(symbol: String, forDays: Number) {
    return this._http.get('https://min-api.cryptocompare.com/data/histoday?fsym=' + symbol + '&tsym=USD&limit=' + forDays)
      .map(result => {
        return result;
      });
  }

  public getSpecificCoinData(symbol) {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + symbol +
      '&tsyms=USD&api_key=c1f530907ddda7f8da258a43988a86e852dedabef797f7e97c4b35688b9d27bd')
      .map(result => {
        return flattenObject(result["RAW"][symbol]);
      });
  }

  public getCryptoIdFromSymbol(symbol) {
    return this._http.get('https://min-api.cryptocompare.com/data/all/coinlist?api_key=c1f530907ddda7f8da258a43988a86e852dedabef797f7e97c4b35688b9d27bd')
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
