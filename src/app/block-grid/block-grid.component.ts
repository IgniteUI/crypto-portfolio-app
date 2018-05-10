import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
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
        this.remoteData = this.data.sortDataByKey(res, 'rank');
      });
  }
}
