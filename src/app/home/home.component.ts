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
  group
} from '@angular/core';

import { DataService  } from '../data.service';
import { IgxFilterOptions } from 'igniteui-angular/main';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s 0.3s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ]),
    trigger('flyInOut2', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        animate(600, keyframes([
          style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(20px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(600, keyframes([
          style({opacity: 1, transform: 'translateY(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateY(-20px)', offset: 0.5}),
          style({opacity: 0, transform: 'translateY(100%)',  offset: 1.0})
        ]))
      ])
    ]),
    trigger('flyInOut3', [
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

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPrices()
      .subscribe(res => {
        this.cryptos = res;
      });
  }

  get fo1() {
    const fo = new IgxFilterOptions();
    fo.key = 'name';
    fo.inputValue = this.search1 ? this.search1 : '';
    return fo;
  }
}
