import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IgxFilterOptions } from 'igniteui-angular';
import { Router } from '@angular/router';
import { flyInOut } from '../router.animations';
import { sortDataByKey, transformCoinImgUrl } from '../core/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [flyInOut()]
})
export class HomeComponent implements OnInit {
  objectKeys = Object.keys;
  cryptos: any;
  public search1: string;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  get filterOptions() {
    const fo = new IgxFilterOptions();
    fo.key = 'CoinInfo.Name';
    fo.inputValue = this.search1 ? this.search1 : '';
    return fo;
  }

  private getData() {
    this.data.getData()
      .subscribe(res => {
        this.cryptos = sortDataByKey(res, 'CoinInfo.Rank');
      });
  }

  public clear(input) {
    input.value = '';
    this.getData();
  }

  public openChart(evt, symbol) {
    this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'show_chart', cryptoName: symbol, daysCount: 100 }]);
  }

  public getCoinImage(imageUrl: string) {
    return transformCoinImgUrl(imageUrl);
  }
}
