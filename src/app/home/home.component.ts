import {
  Component,
  OnInit,
  NgModule,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group,
  ViewChild
} from '@angular/core';

import { DataService  } from '../data.service';
import { IgxFilterOptions } from 'igniteui-angular/main';
import { resolveDefinition } from '@angular/core/src/view/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.5s 0.3s ease', style({
            transform: 'translateX(0)',
            width: 140
          })),
          animate('0.5s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.5s ease', style({
            transform: 'translateX(50px)',
            width: 20
          })),
          animate('0.5s 0.4s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  objectKeys = Object.keys;
  cryptos: any;
  public search1: string;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  get fo1() {
    const fo = new IgxFilterOptions();
    fo.key = 'name';
    fo.inputValue = this.search1 ? this.search1 : '';
    return fo;
  }

  private getData() {
    this.data.getData()
      .subscribe(res => {
        this.cryptos = this.data.sortDataByKey(res, 'rank');
      });
  }

  public clear(input) {
    input.value = '';
    this.getData();
  }

  public openChart(evt, symbol) {
    this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'show_chart', cryptoName: symbol, daysCount: 100 }]);
  }
}
