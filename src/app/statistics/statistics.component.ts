import { Component, OnInit } from '@angular/core';
import { DataService  } from '../data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public cryptoName = 'BTC';
  public daysCount = 7;
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getLastSevenDaysPrices(this.cryptoName, this.daysCount)
      .subscribe(res => {
        this.data = Object.assign(res).Data;
      });
  }
}
