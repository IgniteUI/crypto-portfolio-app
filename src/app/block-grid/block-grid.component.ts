import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Http } from '@angular/http';
import { DataService  } from '../data.service';
import { Observable } from 'rxjs/Rx';
import { IgxGridComponent } from 'igniteui-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-grid',
  templateUrl: './block-grid.component.html',
  styleUrls: ['./block-grid.component.scss']
})
export class BlockGridComponent implements OnInit, AfterViewInit  {
  public remoteData: any[];
  @ViewChild('grid1') public grid1: IgxGridComponent;
  private windowWidth: any;
  private windowHeight: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  constructor(private data: DataService, private router: Router) {
    this.remoteData = [];
  }

  ngOnInit() {
    this.loadData();
    this.windowWidth = window.innerWidth;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    setTimeout(() => {
      this.refreshGrid();
    }, 100);
  }

  get hideColumn() {
    return this.windowWidth && this.windowWidth < 800;
  }

  get columnPercent() {
    if (this.windowWidth && this.windowWidth < 800) {
      return '33.3%';
    } else {
      return '16%';
    }
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
