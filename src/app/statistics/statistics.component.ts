import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import {IgxLabelDirective} from 'igniteui-angular';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  public cryptoName;
  public daysCount;
  data: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) {

    this.route
      .paramMap
      .pipe(map(params => params.get('cryptoName') || route.routeConfig.data.cryptoName)).subscribe(res => this.cryptoName = res);

    this.route
      .paramMap
      .pipe(map(params => params.get('daysCount') || route.routeConfig.data.daysCount)).subscribe(res => this.daysCount = res);
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getLastSevenDaysPrices(this.cryptoName, this.daysCount)
      .subscribe(res => {
        this.data = Object.assign(res).Data.map(item => {
          // multiply by 1000 because Date() requires miliseconds
          const dateObject = new Date(item.time * 1000);
          item.time = dateObject;

          return item;
        });
      });
  }
}
