import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { IgxFilterOptions, IgxExpansionPanelComponent } from 'igniteui-angular';
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
  @ViewChild(IgxExpansionPanelComponent, { static: false })
  public panel: IgxExpansionPanelComponent;

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
    fo.items = this.cryptos;
    fo.key = 'fullName';
    fo.inputValue = this.searchValue ? this.searchValue : '';
    if (fo.items && fo.inputValue) {
      const fI = fo.items.find(item => {
        return item.name.toUpperCase().includes(fo.inputValue.toUpperCase());
      });
      if (fI) {
        fo.key = 'name';
      }
    }
    return fo;
  }

  public clear() {
    this.searchValue = '';
  }

  public openChart(evt, crypto) {
    this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'show_chart',
      cryptoName: [crypto['name'], crypto['fullName']], daysCount: 100 }]);
  }

  public getCoinImage(imageUrl: string) {
    return transformCoinImgUrl(imageUrl);
  }

  public toggleDetails() {
    this.panel.toggle();
  }
}
