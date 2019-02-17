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
   public int = 0;
   public data: any;

   constructor(private dataService: DataService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {

      this.route
         .paramMap
         .pipe(map(params => params.get('cryptoName') || route.routeConfig.data.cryptoName)).subscribe(res => this.cryptoName = res);

      this.route
         .paramMap
         .pipe(map(params => params.get('daysCount') || route.routeConfig.data.daysCount)).subscribe(res => this.daysCount = res);
   }

   ngAfterViewInit() {
      this.getData();
      this.getAndTransformData();
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

   public getData(event?: any) {
      let coin: any;

      if (event) {
         const name = event.item.elementRef.nativeElement.innerText;
         const symbol = name.substring(name.search('[[]') + 1, name.length - 1);

         coin = this.coins.find(c => c.name === name || c.symbol === symbol);
         this.cryptoName = coin.symbol;
         this.dropDown.close();
      }
      this.dataService.getBetweenDaysPrices(this.cryptoName, this.daysCount)
         .subscribe(res => {
            this.data = Object.assign(res).Data.map(item => {
               // Transform data for the Chart. Multiply by 1000 because Date() requires miliseconds
               const dateObject = new Date(item.time * 1000);
               item.time = dateObject;

               return item;
            });
            this.cdr.detectChanges();
         });

   }

   // Fill coins collection
   public getAndTransformData() {
      this.dataService.getData().map((data: any[]) => {
         const obj = [];
         for (let index = 0; index < data.length; index++) {
            const name = data[index]['fullName'];
            const symbol = data[index]['name'];
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
