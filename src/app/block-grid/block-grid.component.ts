import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { IgxGridComponent } from 'igniteui-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-grid',
  templateUrl: './block-grid.component.html',
  styleUrls: ['./block-grid.component.scss']
})
export class BlockGridComponent implements OnInit, AfterViewInit {
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
    this.grid1.groupBy({fieldName: 'Positive Daily Scale', dir: 2});
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


  private positive1h = (rowData: any): boolean => {
    return rowData['quotes.USD.percent_change_1h'] > 0;
  }
  private negative1h = (rowData: any): boolean => {
    return rowData['quotes.USD.percent_change_1h'] < 0;
  }
  private positive24h = (rowData: any): boolean => {
    return rowData['quotes.USD.percent_change_24h'] > 0;
  }
  private negative24h = (rowData: any): boolean => {
    return rowData['quotes.USD.percent_change_24h'] < 0;
  }
  private positive7d = (rowData: any): boolean => {
    return rowData['quotes.USD.percent_change_7d'] > 0;
  }
  private negative7d = (rowData: any): boolean => {
    return rowData['quotes.USD.percent_change_7d'] < 0;
  }

  // tslint:disable-next-line:member-ordering
  public changes1h = {
    positive: this.positive1h,
    negative: this.negative1h
  };


  // tslint:disable-next-line:member-ordering
  public changes24h = {
    positive: this.positive24h,
    negative: this.negative24h
  };

  // tslint:disable-next-line:member-ordering
  public changes7d = {
    positive: this.positive7d,
    negative: this.negative7d
  };

  private loadData() {
    this.data.getData().subscribe(res => {
        this.remoteData = this.data.sortDataByKey(res, 'rank');
      });
  }

  public refreshGrid() {
    this.grid1.reflow();
    this.loadData();
  }
}
