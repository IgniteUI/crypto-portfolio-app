import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  viewChild
} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge, Subject, switchMap, timer } from 'rxjs';
import {
  IgxButtonDirective,
  IgxIconButtonDirective,
  IgxRippleDirective,
  IgxTooltipDirective,
  IgxTooltipTargetDirective
} from '@infragistics/igniteui-angular/directives';
import { IgxIconComponent } from '@infragistics/igniteui-angular/icon';
import { IgxBadgeComponent } from '@infragistics/igniteui-angular/badge';
import { IGX_GRID_DIRECTIVES, IgxGridComponent } from '@infragistics/igniteui-angular/grids/grid';
import {
  IGroupingDoneEventArgs,
  IgxExcelExporterOptions,
  IgxExcelExporterService
} from '@infragistics/igniteui-angular/grids/core';
import { SortingDirection } from '@infragistics/igniteui-angular/core';
import { CoinItem } from '../core/interfaces';
import { transformCoinImgUrl } from '../core/utils';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-block-grid',
  templateUrl: './block-grid.component.html',
  styleUrls: ['./block-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:resize)': 'onResize()'
  },
  imports: [
    DecimalPipe,
    IGX_GRID_DIRECTIVES,
    IgxBadgeComponent,
    IgxButtonDirective,
    IgxIconButtonDirective,
    IgxIconComponent,
    IgxRippleDirective,
    IgxTooltipDirective,
    IgxTooltipTargetDirective
  ]
})
export class BlockGridComponent implements AfterViewInit {
  private readonly dataService = inject(DataService);
  private readonly excelExportService = inject(IgxExcelExporterService);
  private readonly router = inject(Router);
  private readonly refreshRequests = new Subject<void>();

  readonly grid = viewChild.required<IgxGridComponent>('grid1');
  readonly remoteData = signal<CoinItem[]>([]);
  readonly windowWidth = signal(typeof window === 'undefined' ? 1024 : window.innerWidth);
  readonly hideColumn = computed(() => this.windowWidth() < 800);

  readonly changes24h = {
    positive: (rowData: CoinItem) => rowData.changePct24Hour >= 0,
    negative: (rowData: CoinItem) => rowData.changePct24Hour < 0
  };

  constructor() {
    merge(timer(0, 15_000), this.refreshRequests)
      .pipe(
        switchMap(() => this.dataService.getData()),
        takeUntilDestroyed()
      )
      .subscribe(data => this.remoteData.set(data));
  }

  ngAfterViewInit(): void {
    this.grid().groupBy({ fieldName: 'dailyScale', dir: SortingDirection.Asc });
  }

  onResize(): void {
    this.windowWidth.set(window.innerWidth);
  }

  onGroupingDone(args: IGroupingDoneEventArgs): void {
    const columns = Array.isArray(args.groupedColumns) ? args.groupedColumns : [args.groupedColumns];
    if (!columns.some(column => column.field === 'changePct24Hour')) {
      return;
    }

    this.grid().clearGrouping('changePct24Hour');
    if (!columns.some(column => column.field === 'dailyScale')) {
      this.grid().groupBy({ fieldName: 'dailyScale', dir: SortingDirection.Asc });
    }
  }

  setWidth(withHiddenColumns: string, withoutHiddenColumns: string): string {
    return this.hideColumn() ? withHiddenColumns : withoutHiddenColumns;
  }

  getCoinImage(imageUrl: string): string {
    return transformCoinImgUrl(imageUrl);
  }

  exportGrid(): void {
    const options = new IgxExcelExporterOptions('ExportFileFromGrid');
    options.ignoreColumnsVisibility = true;
    this.excelExportService.export(this.grid(), options);
  }

  refreshGrid(): void {
    this.refreshRequests.next();
  }

  getHeader(fieldName: string): string {
    return this.grid().getColumnByName(fieldName)?.header ?? fieldName;
  }

  openChart(symbol: string): void {
    void this.router.navigate([
      '/statistics',
      { text: 'Volatility', iconName: 'insert_chart', cryptoName: symbol, daysCount: 100 }
    ]);
  }
}
