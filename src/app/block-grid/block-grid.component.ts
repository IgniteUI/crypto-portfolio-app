import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from "@angular/http";
import { DataService  } from '../data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-block-grid',
  templateUrl: './block-grid.component.html',
  styleUrls: ['./block-grid.component.css']
})
export class BlockGridComponent implements OnInit {
  public remoteData: any[];

  constructor(private data: DataService) {
    this.remoteData = [];
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.data.getData()
      .subscribe(res => {
        const fetchedData = Object.keys(res['data']),
          newData = [];

        for (const key of fetchedData) {
          newData.push(res['data'][key]);
        }

        this.remoteData = this.data.sortDataByKey(newData, 'rank');
      });
  }
}
