import { Component, OnInit, ViewChild, AfterViewInit, HostListener} from '@angular/core';
import { DataService } from '../services/data.service';
import { IgxGridComponent, SortingDirection,  } from 'igniteui-angular';
import { transformCoinImgUrl } from '../core/utils';
import { CoinItem } from '../core/interfaces';

@Component({
  selector: 'app-block-grid',
  templateUrl: './block-grid.component.html',
  styleUrls: ['./block-grid.component.scss']
})
export class BlockGridComponent implements OnInit, AfterViewInit{
  public remoteData: CoinItem[];
  private windowWidth: any;
  @ViewChild('grid1') public grid1: IgxGridComponent;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.windowWidth = window.innerWidth;
  }

  private loadData() {
    this.dataService.getData().subscribe(res => {
        this.remoteData = res;
      });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.grid1.groupBy({fieldName: 'dailyScale', dir: SortingDirection.Asc});

    setTimeout(() => {
      this.refreshGrid();
    }, 100);
  }

  get hideColumn() {
    return this.windowWidth && this.windowWidth < 800;
  }

  public getCoinImage(imageUrl: string) {
    return transformCoinImgUrl(imageUrl);
  }

  private positive24h = (rowData: any): boolean => {
    return rowData['changePct24Hour'] > 0;
  }
  private negative24h = (rowData: any): boolean => {
    return rowData['changePct24Hour'] < 0;
  }

  // tslint:disable-next-line:member-ordering
  public changes24h = {
    positive: this.positive24h,
    negative: this.negative24h
  };

  public refreshGrid() {
    this.grid1.reflow();
    this.loadData();
  }
}
