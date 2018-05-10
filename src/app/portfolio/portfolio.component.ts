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
  ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { IgxFilterOptions, IgxListItemComponent } from 'igniteui-angular/main';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  host: {'[@moveIn]': ''},
  animations: [moveIn(), fallIn(), moveInLeft(),
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
export class PortfolioComponent implements OnInit {

  public remoteData: any[];
  public searchCrypto: string;

  constructor(private data: DataService) {
    this.remoteData = [];
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.data.getData()
      .subscribe(res => {
        this.remoteData = this.data.sortDataByKey(res, 'rank');
      });
  }

  get filterCryptos() {
    const fo = new IgxFilterOptions();
    fo.key = 'name';
    fo.inputValue = this.searchCrypto;
    return fo;
  }

  private toggleFavorite(crypto: any) {
    crypto.isFavorite = !crypto.isFavorite;
  }

}
