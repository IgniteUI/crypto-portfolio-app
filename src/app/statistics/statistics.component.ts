import {
   Component, ViewChild, AfterViewInit, ChangeDetectionStrategy,
   ChangeDetectorRef,
   OnInit,
   NgZone
} from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { map, first } from 'rxjs/operators';
import {
   IgxComboComponent,
   IComboSelectionChangeEventArgs
} from 'igniteui-angular';
import { CryptoCoin } from '../core/interfaces';
import { IgxFinancialChartComponent } from 'igniteui-angular-charts/ES5/igx-financial-chart-component';
import { FinancialOverlayType } from 'igniteui-angular-charts/ES5/FinancialOverlayType';

@Component({
   selector: 'app-statistics',
   templateUrl: './statistics.component.html',
   styleUrls: ['./statistics.component.scss'],
   changeDetection: ChangeDetectionStrategy.Default
})
export class StatisticsComponent implements OnInit, AfterViewInit {
   @ViewChild('combo', { read: IgxComboComponent, static: true }) public combo: IgxComboComponent;
   @ViewChild(IgxFinancialChartComponent, { static: true }) public chart: IgxFinancialChartComponent;

   public coins: CryptoCoin[];
   public cryptoName: CryptoCoin;
   public daysCount: Number;
   public int = 0;
   public data: any = [];

   constructor(private dataService: DataService, private route: ActivatedRoute, private cdr: ChangeDetectorRef, private zone: NgZone) {

      this.route
         .paramMap
         .pipe(map(params => params.getAll('cryptoName') || route.routeConfig.data.cryptoName)).subscribe(res => {
            this.cryptoName = res.length === 0 ? { name: 'Bitcoin', symbol: 'BTC'} :
               { name: res[0].split(',')[1], symbol: res[0].split(',')[0] };
         });

      this.route
         .paramMap
         .pipe(map(params => params.get('daysCount') || route.routeConfig.data.daysCount)).subscribe(res => this.daysCount = res);
   }

   ngAfterViewInit() {
      // this.getAndTransformData();
      this.chart.overlayTypes.add(FinancialOverlayType.PriceChannel);
   }

   ngOnInit() {
      this.getAndTransformData();
      this.combo.onSelectionChange.subscribe((evt: IComboSelectionChangeEventArgs) => {
         if (this.coins) {
            if (evt.newSelection.length === 0) {
               this.clearChartData();
            } else {
               const coin = evt.added.length !== 0 ? evt.added : evt.removed;
               const removeRecord = evt.added.length !== 0 ? false : true;
               this.fillChart(coin, removeRecord);
            }
         }
      });
   }

   public fillChart(obj, removeRecord) {
      this.dataService.getHistoricalData(obj)
         .subscribe(res => {
            const returnedData: any = Object.assign(res.data).Data.map(item => {
               // Transform data for the Chart. Multiply by 1000 because Date() requires miliseconds
               const dateObject = new Date(item.time * 1000);
               item.time = dateObject;
               return item;
            });

            if (removeRecord) {
               // Removing data item
               this.data = this.arrayRemove(this.data, obj[0]);
               this.chart.notifyInsertItem(this.data, this.data.length - 1, [returnedData, returnedData.title = obj[0]]);
            } else {
               // Adding data item
               this.data.push([returnedData, returnedData.title = obj[0]]);
               this.chart.notifyInsertItem(this.data, this.data.length - 1, [returnedData, returnedData.title = obj[0]]);
            }
         });
   }

   private arrayRemove(arr, value) {
      return arr.filter(function(item) {
          return item[1] !== value;
      });
   }

   // Fill coins collection
   public getAndTransformData() {
      this.dataService.getData().pipe(map((data: any[]) => {
         const obj = [];
         for (let index = 0; index < data.length; index++) {
            const name = data[index]['fullName'];
            const symbol = data[index]['name'];
            obj.push({ name: name, symbol: symbol });
         }
         return obj;
      })).subscribe(res => {
         // set combo datasource
         this.coins = res;

         // Or use
         // this.cdr.detectChanges();
         this.zone.onStable.pipe(first()).subscribe(() => {
            this.combo.selectItems([this.cryptoName.symbol]);
         });
      });
   }

   private clearChartData() {
      this.data = [];
   }
}
