import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Injector,
  afterNextRender,
  inject,
  signal,
  viewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  IComboSelectionChangingEventArgs,
  IgxComboComponent
} from '@infragistics/igniteui-angular/combo';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';
import { CryptoCoin, HistoricalPrice } from '../core/interfaces';
import { DataService } from '../services/data.service';

export type FinancialChartSeries = HistoricalPrice[] & { title: string };

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IgxComboComponent, IgxFinancialChartModule]
})
export class StatisticsComponent {
  private readonly dataService = inject(DataService);
  private readonly route = inject(ActivatedRoute);
  private readonly injector = inject(Injector);
  private readonly destroyRef = inject(DestroyRef);

  readonly combo = viewChild.required<IgxComboComponent>('combo');
  readonly coins = signal<CryptoCoin[]>([]);
  readonly data = signal<FinancialChartSeries[]>([]);
  readonly initialCoin = signal(this.readInitialCoin());

  constructor() {
    this.dataService.getData()
      .pipe(takeUntilDestroyed())
      .subscribe(items => {
        const coins = items.map(item => ({ name: item.fullName, symbol: item.name }));
        this.coins.set(coins);

        const initial = coins.find(coin => coin.symbol === this.initialCoin().symbol) ?? this.initialCoin();
        this.initialCoin.set(initial);
        this.addSeries(initial);
        afterNextRender(() => this.combo().select([initial.symbol]), { injector: this.injector });
      });
  }

  onSelectionChanging(event: IComboSelectionChangingEventArgs): void {
    if (event.newValue.length === 0) {
      this.data.set([]);
      return;
    }

    const addedCoin = this.asCryptoCoin(event.added[0]);
    if (addedCoin) {
      this.addSeries(addedCoin);
    }

    const removedCoin = this.asCryptoCoin(event.removed[0]);
    if (removedCoin) {
      this.data.update(series => series.filter(item => item.title !== removedCoin.name));
    }
  }

  private addSeries(coin: CryptoCoin): void {
    this.dataService.getHistoricalData(coin.symbol)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        const series = Object.assign([...result.data], { title: coin.name });
        this.data.update(current => [
          ...current.filter(item => item.title !== coin.name),
          series
        ]);
      });
  }

  private readInitialCoin(): CryptoCoin {
    const configured = this.route.snapshot.data['cryptoName'];
    const raw = this.route.snapshot.paramMap.get('cryptoName')
      ?? (typeof configured === 'string' ? configured : 'BTC');
    const [symbol, ...nameParts] = raw.split(',');

    return {
      symbol: symbol || 'BTC',
      name: nameParts.join(',') || symbol || 'Bitcoin'
    };
  }

  private asCryptoCoin(value: unknown): CryptoCoin | null {
    if (!value || typeof value !== 'object') {
      return null;
    }

    const coin = value as Partial<CryptoCoin>;
    return typeof coin.name === 'string' && typeof coin.symbol === 'string'
      ? { name: coin.name, symbol: coin.symbol }
      : null;
  }
}
