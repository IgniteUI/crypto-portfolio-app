import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from '../services/data.service';
import { IgxButtonDirective, IgxDividerComponent, IgxFilterOptions, IgxFilterPipe, IgxIconButtonDirective, IgxRippleDirective } from '@infragistics/igniteui-angular/directives';
import { IGX_INPUT_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular/input-group';
import { IgxIconComponent } from '@infragistics/igniteui-angular/icon';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardMediaDirective } from '@infragistics/igniteui-angular/card';
import { Router } from '@angular/router';
import { flyInOut } from '../router.animations';
import { sortDataByKey, transformCoinImgUrl } from '../core/utils';
import { CoinItem } from '../core/interfaces';
import { DecimalPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [flyInOut()],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
      DecimalPipe,
      ReactiveFormsModule,
      IGX_INPUT_GROUP_DIRECTIVES,
      IgxIconComponent,
      IgxCardComponent,
      IgxCardHeaderComponent,
      IgxCardMediaDirective,
      IgxCardHeaderTitleDirective,
      IgxCardContentDirective,
      IgxCardActionsComponent,
      IgxDividerComponent,
      IgxButtonDirective,
      IgxIconButtonDirective,
      IgxRippleDirective,
      IgxFilterPipe
    ]
})
export class HomeComponent {
  private readonly data = inject(DataService);
  private readonly router = inject(Router);

  readonly searchControl = new FormControl('', { nonNullable: true });
  readonly searchValue = toSignal(
    this.searchControl.valueChanges.pipe(startWith(this.searchControl.value)),
    { initialValue: '' }
  );
  readonly cryptos = toSignal(
    this.data.getData().pipe(map(items => sortDataByKey(items, 'rank'))),
    { initialValue: [] as CoinItem[] }
  );
  readonly filterOptions = computed(() => {
    const fo = new IgxFilterOptions();
    fo.items = this.cryptos();
    fo.key = 'fullName';
    fo.inputValue = this.searchValue();
    if (fo.items && fo.inputValue) {
      const fI = this.cryptos().find(item => {
        return item.name.toUpperCase().includes(fo.inputValue.toUpperCase());
      });
      if (fI) {
        fo.key = 'name';
      }
    }
    return fo;
  });

  public clear(): void {
    this.searchControl.setValue('');
  }

  public openChart(crypto: CoinItem): void {
    void this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'show_chart',
      cryptoName: [crypto.name, crypto.fullName], daysCount: 100 }]);
  }

  public getCoinImage(imageUrl: string): string {
    return transformCoinImgUrl(imageUrl);
  }
}
