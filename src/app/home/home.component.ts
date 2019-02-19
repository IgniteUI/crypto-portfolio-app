import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IgxFilterOptions } from 'igniteui-angular';
import { Router } from '@angular/router';
import { flyInOut } from '../router.animations';
import { sortDataByKey, transformCoinImgUrl } from '../core/utils';
import { CoinItem } from '../core/interfaces';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss'],
   animations: [flyInOut()]
})
export class HomeComponent implements OnInit {
   cryptos: CoinItem[];
   public searchValue: string;

   constructor(private data: DataService, private router: Router) { }

   ngOnInit() {
      this.loadData();
   }

   private loadData() {
      this.data.getData()
         .subscribe(res => {
            this.cryptos = sortDataByKey(res, 'rank');
         });
   }

   get filterOptions() {
      const fo = new IgxFilterOptions();
      fo.key = 'fullName';
      fo.inputValue = this.searchValue ? this.searchValue : '';
      return fo;
   }

   public clear(input) {
      input.value = '';
      this.loadData();
   }

   public openChart(evt, symbol) {
      this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'show_chart', cryptoName: symbol, daysCount: 100 }]);
   }

   public getCoinImage(imageUrl: string) {
      return transformCoinImgUrl(imageUrl);
   }
}
