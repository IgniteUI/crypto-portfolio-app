import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IgxFilterOptions } from 'igniteui-angular';
import { sortDataByKey, transformCoinImgUrl } from '../core/utils';
import { Animations } from '../core/animations';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss'],
  animations: [Animations.listItemLoadAnimation]
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
        this.remoteData = sortDataByKey(res, 'rank');
      });
  }

  get filterCryptos() {
    const fo = new IgxFilterOptions();
    fo.key = 'fullName';
    fo.inputValue = this.searchCrypto;
    return fo;
  }

  public getCoinImage(imageUrl: string) {
    return transformCoinImgUrl(imageUrl);
  }
}
