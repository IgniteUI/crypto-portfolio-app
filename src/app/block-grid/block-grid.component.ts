import { Component, OnInit, ViewChild, AfterViewInit, HostListener} from '@angular/core';
import { DataService } from '../services/data.service';
import { IgxGridComponent, SortingDirection,  } from 'igniteui-angular';
import { sortDataByKey } from '../core/utils';
import { transformCoinImgUrl } from '../core/utils';

@Component({
  selector: 'app-block-grid',
  templateUrl: './block-grid.component.html',
  styleUrls: ['./block-grid.component.scss']
})
export class BlockGridComponent implements OnInit, AfterViewInit{
  public remoteData: any[];
  private windowWidth: any;
  @ViewChild('grid1') public grid1: IgxGridComponent;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadData();
    this.windowWidth = window.innerWidth;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.grid1.groupBy({fieldName: 'RAW.USD.DAILYSCALE', dir: SortingDirection.Asc});

    setTimeout(() => {
      this.refreshGrid();
    }, 100);
  }

  get hideColumn() {
    return this.windowWidth && this.windowWidth < 800;
  }

  private positive24h = (rowData: any): boolean => {
    return rowData['RAW.USD.CHANGEPCTDAY'] > 0;
  }
  private negative24h = (rowData: any): boolean => {
    return rowData['RAW.USD.CHANGEPCTDAY'] < 0;
  }

  // tslint:disable-next-line:member-ordering
  public changes24h = {
    positive: this.positive24h,
    negative: this.negative24h
  };

  private loadData() {
    this.dataService.getData().subscribe(res => {
        this.remoteData = sortDataByKey(res, 'CoinInfo.Rank');
      });
  }

  public getCoinImage(imageUrl: string) {
    return transformCoinImgUrl(imageUrl);
  }

  public refreshGrid() {
    this.grid1.reflow();
    this.loadData();
  }
}
