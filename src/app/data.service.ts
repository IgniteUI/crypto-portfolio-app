import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: HttpClient) { }

  getPrices() {
    return this._http.get('https://api.coinmarketcap.com/v1/ticker/')
      .map(result =>  {
        return this.result = result;
      });
  }
}
