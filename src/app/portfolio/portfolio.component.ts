import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  signal,
  viewChild
} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, forkJoin, map, of, switchMap } from 'rxjs';
import {
  IgxButtonDirective,
  IgxIconButtonDirective,
  IgxRippleDirective
} from '@infragistics/igniteui-angular/directives';
import { IgxIconComponent } from '@infragistics/igniteui-angular/icon';
import { IGX_INPUT_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular/input-group';
import { IgxDialogComponent } from '@infragistics/igniteui-angular/dialog';
import { IgxSnackbarComponent } from '@infragistics/igniteui-angular/snackbar';
import { IgxActionStripComponent } from '@infragistics/igniteui-angular/action-strip';
import { IGX_GRID_DIRECTIVES } from '@infragistics/igniteui-angular/grids/grid';
import {
  IGridEditDoneEventArgs,
  IRowDataEventArgs,
  IgxGridEditingActionsComponent
} from '@infragistics/igniteui-angular/grids/core';
import {
  IgxItemLegendModule,
  IgxPieChartModule,
  IgxSliceClickEventArgs
} from 'igniteui-angular-charts';
import { BlockItem } from '../core/interfaces';
import {
  getErrorMessage,
  isRecord,
  readNumber,
  readString,
  transformCoinImgUrl
} from '../core/utils';
import { ItemService } from '../services/block-item.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DecimalPipe,
    ReactiveFormsModule,
    IGX_GRID_DIRECTIVES,
    IGX_INPUT_GROUP_DIRECTIVES,
    IgxActionStripComponent,
    IgxButtonDirective,
    IgxDialogComponent,
    IgxGridEditingActionsComponent,
    IgxIconButtonDirective,
    IgxIconComponent,
    IgxItemLegendModule,
    IgxPieChartModule,
    IgxRippleDirective,
    IgxSnackbarComponent
  ]
})
export class PortfolioComponent {
  private readonly itemService = inject(ItemService);
  private readonly router = inject(Router);
  private readonly dataService = inject(DataService);
  private readonly destroyRef = inject(DestroyRef);

  readonly dialog = viewChild.required<IgxDialogComponent>('modal');
  readonly snackbar = viewChild.required<IgxSnackbarComponent>('snack');
  readonly statusSnackbar = viewChild.required<IgxSnackbarComponent>('statusSnack');

  readonly blockItems = signal<BlockItem[]>([]);
  readonly deletedItem = signal<BlockItem | null>(null);
  readonly displayedItems = computed(() =>
    [...this.blockItems()].sort((left, right) => right.total - left.total)
  );
  readonly totalPortfolioValue = computed(() =>
    this.blockItems().reduce((total, coin) => total + coin.holdings * coin.price, 0)
  );

  readonly addCoinForm = new FormGroup({
    symbol: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]
    }),
    holdings: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(Number.EPSILON)]
    })
  });

  readonly formatOptions = {
    digitsInfo: '1.2-2',
    currencyCode: 'USD'
  };

  readonly dailyChanges = {
    positive: (rowData: BlockItem) => rowData.changePct24Hour >= 0,
    negative: (rowData: BlockItem) => rowData.changePct24Hour < 0
  };

  readonly formatLabel = (context: unknown): string => {
    if (!isRecord(context)) {
      return '';
    }

    const item = isRecord(context['item']) ? context['item'] : {};
    const name = readString(item, 'fullName', 'Coin');
    const percentage = Math.round(readNumber(context, 'percentValue') * 100) / 100;
    return `${name} (${percentage}%)`;
  };

  constructor() {
    this.itemService.getItemsList()
      .pipe(takeUntilDestroyed())
      .subscribe(items => {
        this.blockItems.set(items.map(item => this.withTotal(item)));
        this.updatePortfolio();
      });
  }

  restore(): void {
    const item = this.deletedItem();
    if (!item) {
      return;
    }

    this.itemService.createItem(item);
    this.deletedItem.set(null);
    this.snackbar().close();
  }

  openDialog(): void {
    this.dialog().open();
  }

  updatePortfolio(): void {
    const items = this.blockItems();
    if (items.length === 0) {
      return;
    }

    forkJoin(items.map(item =>
      this.dataService.getSpecificCoinData(item.name).pipe(
        map(marketItem => Object.assign(new BlockItem(), marketItem, item, {
          price: marketItem.price,
          changePct24Hour: marketItem.changePct24Hour,
          imageUrl: marketItem.imageUrl || item.imageUrl,
          total: item.holdings * marketItem.price
        })),
        catchError(() => of(item))
      )
    ))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(itemsWithPrices => this.blockItems.set(itemsWithPrices));
  }

  openChart(symbol: string): void {
    void this.router.navigate([
      '/statistics',
      { text: 'Volatility', iconName: 'show_chart', cryptoName: symbol, daysCount: 100 }
    ]);
  }

  getCoinImage(imageUrl: string): string {
    return transformCoinImgUrl(imageUrl);
  }

  addItem(): void {
    if (this.addCoinForm.invalid) {
      this.addCoinForm.markAllAsTouched();
      this.showStatus('Enter a valid coin symbol and a holdings amount greater than zero.');
      return;
    }

    const symbol = this.addCoinForm.controls.symbol.value.trim().toUpperCase();
    const holdings = this.addCoinForm.controls.holdings.value;

    if (this.blockItems().some(item => item.name === symbol)) {
      this.showStatus('Already added!');
      return;
    }

    this.dataService.getCryptoIdFromSymbol(symbol)
      .pipe(
        switchMap(lookup => lookup
          ? this.dataService.getSpecificCoinData(lookup.Name)
          : of(null)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: item => {
          if (!item) {
            this.showStatus('Coin does not exist!');
            return;
          }

          const portfolioItem = Object.assign(new BlockItem(), item, {
            holdings,
            total: holdings * item.price
          });
          this.itemService.createItem(portfolioItem);
          this.addCoinForm.reset({ symbol: '', holdings: 0 });
          this.dialog().close();
          this.showStatus('Coin added!');
        },
        error: (error: unknown) => this.showStatus(getErrorMessage(error))
      });
  }

  updateCell(event: IGridEditDoneEventArgs): void {
    if (event.column?.field !== 'holdings') {
      return;
    }

    const item = this.asBlockItem(event.rowData);
    const holdings = typeof event.newValue === 'number' ? event.newValue : Number(event.newValue);
    const key = item?.key;
    if (!key || !Number.isFinite(holdings) || holdings < 0) {
      return;
    }

    const updated = Object.assign(new BlockItem(), item, {
      holdings,
      total: holdings * item.price
    });
    this.blockItems.update(items => items.map(current => current.key === updated.key ? updated : current));
    this.itemService.updateItem(key, updated);
  }

  deleteRow(event: IRowDataEventArgs): void {
    const item = this.asBlockItem(event.rowData);
    if (!item?.key) {
      return;
    }

    this.itemService.deleteItem(item.key);
    const restorable = Object.assign(new BlockItem(), item);
    delete restorable.key;
    this.deletedItem.set(restorable);
    this.snackbar().open();
  }

  onSliceClick(event: { args: IgxSliceClickEventArgs }): void {
    event.args.isExploded = !event.args.isExploded;
  }

  private withTotal(item: BlockItem): BlockItem {
    return Object.assign(new BlockItem(), item, { total: item.holdings * item.price });
  }

  private asBlockItem(value: unknown): BlockItem | null {
    return isRecord(value) ? Object.assign(new BlockItem(), value) : null;
  }

  private showStatus(message: string): void {
    this.statusSnackbar().open(message);
  }
}
