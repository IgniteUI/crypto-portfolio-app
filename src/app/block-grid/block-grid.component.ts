import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { DataService  } from '../data.service';
import { Observable } from 'rxjs/Rx';
import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';

@Component({
  selector: 'app-block-grid',
  templateUrl: './block-grid.component.html',
  styleUrls: ['./block-grid.component.css']
})
export class BlockGridComponent implements OnInit {
  public remoteData: any[];
  @ViewChild('grid1') public grid1: IgxGridComponent;

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

  public refreshGrid() {
    this.grid1.markForCheck();
    this.grid1.reflow();
    this.loadData();
  }
}
