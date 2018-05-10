import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;
  cachedData: any;

  constructor(private _http: HttpClient) { }

  getData() {
    if (!this.cachedData) {
      // return this._http.get('https://api.coinmarketcap.com/v1/ticker/')
      this.cachedData = this._http.get('https://api.coinmarketcap.com/v2/ticker/?convert=BTC&limit=1000')
      .map(result =>  {
        const fetchedData = Object.keys(result['data']),
          newData = [];

        for (const key of fetchedData) {
          newData.push(this.flattenObject(result['data'][key]));
        }

        return this.result = newData;
      });
    }

    return this.cachedData;
  }

  getLastSevenDaysPrices(name: String, forDays: Number) {
    return this._http.get('https://min-api.cryptocompare.com/data/histoday?fsym=' + name.toUpperCase() +
      '&tsym=USD&limit=' + forDays).map(result =>  {
        return this.result = result;
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

  public flattenObject = function(ob) {
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
