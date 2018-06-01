import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Http } from '@angular/http';
import { DataService  } from '../data.service';
import { Observable } from 'rxjs/Rx';
import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-grid',
  templateUrl: './block-grid.component.html',
  styleUrls: ['./block-grid.component.css']
})
export class BlockGridComponent implements OnInit, AfterViewInit  {
  public remoteData: any[];
  @ViewChild('grid1') public grid1: IgxGridComponent;

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   debugger;
  //   this.grid1.reflow();
  // }

  constructor(private data: DataService, private router: Router) {
    this.remoteData = [];
  }

  ngOnInit() {
    this.loadData();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    setTimeout(() => {
      this.refreshGrid();
    }, 100);
  }

  private loadData() {
    this.data.getData()
      .subscribe(res => {
        this.remoteData = this.data.sortDataByKey(res, 'rank');
      });
  }

  public refreshGrid() {
    this.grid1.reflow();
    this.loadData();
  }
}
