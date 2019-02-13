import {
  Component, ViewEncapsulation, ViewChild, AfterViewInit, ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import {
  IgxFilterOptions,
  HorizontalAlignment,
  VerticalAlignment,
  ConnectedPositioningStrategy,
  CloseScrollStrategy,
  IgxDropDownComponent
} from 'igniteui-angular';
import { CryptoCoin } from '../core/interfaces';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements AfterViewInit {
  @ViewChild('dropDown', { read: IgxDropDownComponent }) public dropDown: IgxDropDownComponent;
  public coins: CryptoCoin[];
  public cryptoName;
  public daysCount: Number;
  data: any;
  public int = 0;

  constructor(private dataService: DataService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {

    this.route
      .paramMap
      .pipe(map(params => params.get('cryptoName') || route.routeConfig.data.cryptoName)).subscribe(res => this.cryptoName = res);

    this.route
      .paramMap
      .pipe(map(params => params.get('daysCount') || route.routeConfig.data.daysCount)).subscribe(res => this.daysCount = res);
  }

  private _dropdownPositionSettings = {
    horizontalStartPoint: HorizontalAlignment.Left,
    verticalStartPoint: VerticalAlignment.Bottom
  };

  private _dropDownOverlaySettings = {
    closeOnOutsideClick: true,
    modal: false,
    positionStrategy: new ConnectedPositioningStrategy(this._dropdownPositionSettings),
    scrollStrategy: new CloseScrollStrategy()
  };

  public toggleDropDown(eventArgs, selectedDropDown: IgxDropDownComponent) {
    const dropDown = selectedDropDown;
    this._dropDownOverlaySettings.positionStrategy.settings.target = eventArgs.target;
    dropDown.toggle(this._dropDownOverlaySettings);
  }

  ngAfterViewInit() {
    this.getData();
    this.getAllData();
  }

  getData(event?: any) {
    let coin: any;
    if (event) {
      const name = event.event.target.innerText.substring(0, event.event.target.innerText.search('[[]')).trim();
      const symbol = event.event.target.innerText.substring(event.event.target.innerText.search('[[]'));
      coin = this.coins.find(c => c.name === name || c.symbol === symbol.replace('[', '').replace(']', ''));
      this.cryptoName = coin.symbol;
    }
    this.dataService.getBetweenDaysPrices(this.cryptoName, this.daysCount)
      .subscribe(res => {
        this.data = Object.assign(res).Data.map(item => {
          // multiply by 1000 because Date() requires miliseconds
          const dateObject = new Date(item.time * 1000);
          item.time = dateObject;

          return item;
        });
        this.cdr.detectChanges();
      });

  }

  public getAllData() {
    this.dataService.getData().map((data: any[]) => {
      const obj = [];
      for (let index = 0; index < data.length; index++) {
        const name = data[index]['CoinInfo.FullName'];
        const symbol = data[index]['CoinInfo.Name'];
        obj.push({ name: name, symbol: symbol });
      }
      return obj;
    }).subscribe(res => this.coins = res);
  }

  get filterNames() {
    const fo = new IgxFilterOptions();
    fo.items = this.coins;
    fo.key = 'symbol';
    fo.inputValue = this.cryptoName;
    if (fo.items) {
      const fI = fo.items.find(item => {
        return item.name.toUpperCase().includes(fo.inputValue.toUpperCase());
      });
      if (fI) {
        fo.key = 'name';
      }
    }
    return fo;
  }
}
