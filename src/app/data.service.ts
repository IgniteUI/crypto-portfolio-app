import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { offlineData } from '../assets/offlineData';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  public cachedData: any;

  constructor(private _http: HttpClient) { }

  getData() {
    if (!this.cachedData) {
      // return this._http.get('https://api.coinmarketcap.com/v1/ticker/')
      this.cachedData = this._http.get('https://api.coinmarketcap.com/v2/ticker/?convert=BTC&limit=1000')
      .map(result =>  {
        let newData = [];

        if (result['metadata'].error === null) {
          const fetchedData = Object.keys(result['data']);

          for (const key of fetchedData) {

            if (result['data'][key].quotes['USD']['percent_change_24h'] >= 0) {
              result['data'][key]['Positive Daily Scale'] = true;
            } else {
              result['data'][key]['Positive Daily Scale'] = false;
            }

            newData.push(this.flattenObject(result['data'][key]));
          }
        } else {
          newData = offlineData;
        }

        return newData;
      });
    }

    return this.cachedData;
  }

  getLastSevenDaysPrices(name: String, forDays: Number) {
    return this._http.get('https://min-api.cryptocompare.com/data/histoday?fsym=' + name.toUpperCase() +
      '&tsym=USD&limit=' + forDays).map(result =>  {
        return result;
    });
  }

  public getSpecificCoinData(cryptoId) {
    return this._http.get('https://api.coinmarketcap.com/v2/ticker/' + cryptoId + '/?structure=array').map(result =>  {
        return this.flattenObject(result['data'][0]);
    });
  }

  public getCryptoIdFromSymbol(symbol) {
    return this._http.get('https://api.coinmarketcap.com/v2/listings/').map(result =>  {
      const crypto = result['data'].filter(item => item.symbol === symbol);
      return crypto[0];
    });
  }

  public sortDataByKey(array, keyToSortBy) {
    function sortByKey(a, b) {
        const x = a[keyToSortBy];
        const y = b[keyToSortBy];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }

    return array.sort(sortByKey);
  }

  private flattenObject = function(ob) {
    const toReturn = {};

    for (const i in ob) {
      if (!ob.hasOwnProperty(i)) { continue; }

      if ((typeof ob[i]) === 'object') {
        const flatObject = this.flattenObject(ob[i]);
        for (const x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) { continue; }
          toReturn[i + '.' + x] = flatObject[x];
        }
      } else {
        toReturn[i] = ob[i];
      }
    }
    return toReturn;
  };
}
