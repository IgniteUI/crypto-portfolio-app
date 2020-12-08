import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { DataService } from '../services/data.service';
import { IgxGridComponent, SortingDirection, IgxExcelExporterOptions,
        IgxExcelExporterService,  IGroupingDoneEventArgs, IgxColumnComponent } from 'igniteui-angular';
import { transformCoinImgUrl } from '../core/utils';
import { CoinItem } from '../core/interfaces';
import { interval } from 'rxjs';
import { Router } from '@angular/router';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-block-grid',
  templateUrl: './block-grid.component.html',
  styleUrls: ['./block-grid.component.scss']
})
export class BlockGridComponent implements OnInit, AfterViewInit {
  public remoteData: CoinItem[];
  private windowWidth: any;
  @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  constructor(private dataService: DataService, private excelExportService: IgxExcelExporterService, private router: Router) { }

  ngOnInit() {
    this.windowWidth = window.innerWidth;
  }

  private loadData() {
    interval(15000)
      .pipe(startWith(0))
      .subscribe(() => {
        this.dataService.getData().subscribe(res => {
        this.remoteData = res;
      });
    });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.grid1.onGroupingDone.subscribe((args: IGroupingDoneEventArgs) => {
      if (args.groupedColumns instanceof Array && args.groupedColumns.length !== 0) {
        const colNotForGroup = (args.groupedColumns as IgxColumnComponent[]).find(col => col.field === 'changePct24Hour');
        if ( colNotForGroup ) {
          this.grid1.clearGrouping('changePct24Hour');
          if ((args.groupedColumns as IgxColumnComponent[]).find(col => col.field === 'dailyScale') === undefined) {
            this.grid1.groupBy({ fieldName: 'dailyScale', dir: SortingDirection.Asc });
          }
        }
      } else if (args.groupedColumns instanceof IgxColumnComponent) {
          if (args.groupedColumns.field === 'changePct24Hour') {
            this.grid1.clearGrouping('changePct24Hour');
            this.grid1.groupBy({ fieldName: 'dailyScale', dir: SortingDirection.Asc });
          }
      }
    });
    this.grid1.groupBy({ fieldName: 'dailyScale', dir: SortingDirection.Asc });

    this.refreshGrid();
  }

  get hideColumn() {
    return this.windowWidth && this.windowWidth < 800;
  }

  public setWidth(withHideColumns: string, withoutHideColumns: string)  {
   return this.hideColumn ? withHideColumns : withoutHideColumns;
  }

  public getCoinImage(imageUrl: string) {
    return transformCoinImgUrl(imageUrl);
  }

  private positive24h = (rowData: any): boolean => {
    return rowData['changePct24Hour'] >= 0;
  }

  private negative24h = (rowData: any): boolean => {
    return rowData['changePct24Hour'] < 0;
  }

  public exportGrid() {
    const options =  new IgxExcelExporterOptions('ExportFileFromGrid');
    options.ignoreColumnsVisibility = true;
    this.excelExportService.export(this.grid1, options);
  }

  // tslint:disable-next-line:member-ordering
  public changes24h = {
    positive: this.positive24h,
    negative: this.negative24h
  };

  public refreshGrid() {
    // this.grid1.reflow();
    this.loadData();
  }

  public getHeader(fieldName: string): string {
    return this.grid1.getColumnByName(fieldName).header;
  }

  public openChart(evt, symbol) {
    this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'insert_chart', cryptoName: symbol, daysCount: 100 }]);
 }
}
