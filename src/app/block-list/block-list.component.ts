import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IgxFilterOptions } from 'igniteui-angular';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { sortDataByKey } from '../core/utils';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [ // each time the binding value changes
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class BlockListComponent implements OnInit {

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
        this.remoteData = sortDataByKey(res, 'CoinInfo.Rank');
      });
  }

  get filterCryptos() {
    const fo = new IgxFilterOptions();
    fo.key = 'CoinInfo.FullName';
    fo.inputValue = this.searchCrypto;
    return fo;
  }

  private toggleFavorite(crypto: any) {
    crypto.isFavorite = !crypto.isFavorite;
  }

}
