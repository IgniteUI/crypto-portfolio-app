import {
   Component, ViewChild, AfterViewInit, ChangeDetectionStrategy,
   ChangeDetectorRef,
   OnInit
} from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import {
   IgxComboComponent,
   IComboSelectionChangeEventArgs
} from 'igniteui-angular';
import { CryptoCoin } from '../core/interfaces';
import { IgxFinancialChartComponent } from 'igniteui-angular-charts/ES5/igx-financial-chart-component';
import { FinancialOverlayType } from 'igniteui-angular-charts/ES5/FinancialOverlayType';
import { Thickness } from 'igniteui-angular-core/ES5/Thickness';

@Component({
   selector: 'app-statistics',
   templateUrl: './statistics.component.html',
   styleUrls: ['./statistics.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnInit, AfterViewInit {
   @ViewChild('combo', { read: IgxComboComponent, static: true }) public combo: IgxComboComponent;
   @ViewChild(IgxFinancialChartComponent, { static: true }) public chart: IgxFinancialChartComponent;

   public coins: CryptoCoin[];
   public cryptoName: CryptoCoin;
   public daysCount: Number;
   public int = 0;
   public data: any = [];

   constructor(private dataService: DataService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {

      this.route
         .paramMap
         .pipe(map(params => params.get('cryptoName') || route.routeConfig.data.cryptoName)).subscribe(res => {
            this.cryptoName = { name: '', symbol: res };
         });

      this.route
         .paramMap
         .pipe(map(params => params.get('daysCount') || route.routeConfig.data.daysCount)).subscribe(res => this.daysCount = res);
   }

   ngAfterViewInit() {
      this.getAndTransformData();
      this.chart.overlayTypes.add(FinancialOverlayType.PriceChannel);
   }

   ngOnInit() {
      this.combo.onSelectionChange.subscribe((evt: IComboSelectionChangeEventArgs) => {
         debugger;
         if (this.coins) {
            evt.newSelection.length === 0 ? this.clearChartData() : this.getData(evt.newSelection[evt.newSelection.length - 1]);
         }
      });
   }

   public getData(obj: CryptoCoin) {
      this.dataService.getHistoricalData(obj.symbol)
         .subscribe(res => {
            const returnedData: any = Object.assign(res.data).Data.map(item => {
               // Transform data for the Chart. Multiply by 1000 because Date() requires miliseconds
               const dateObject = new Date(item.time * 1000);
               item.time = dateObject;
               return item;
            });

            this.data.push([returnedData, returnedData.title = res.symbol + ' value: ']);
            this.chart.notifyInsertItem(this.data, this.data.length - 1, [returnedData, returnedData.title = 'Value:']);
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
      }).subscribe(res => {
         this.coins = res;

         this.coins.forEach(element => {
            if (this.cryptoName.symbol === element.symbol) {
               this.combo.selectItems([element]);
               this.combo.triggerCheck();
            }
         });
      });
   }

   private clearChartData() {
      this.data = [];
   }
}
