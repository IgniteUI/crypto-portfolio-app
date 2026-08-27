import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from '../services/data.service';
import { IgxFilterOptions, IgxFilterPipe, IgxIconButtonDirective } from '@infragistics/igniteui-angular/directives';
import { IGX_INPUT_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular/input-group';
import { IgxIconComponent } from '@infragistics/igniteui-angular/icon';
import { IGX_LIST_DIRECTIVES } from '@infragistics/igniteui-angular/list';
import { IgxAvatarComponent } from '@infragistics/igniteui-angular/avatar';
import { sortDataByKey, transformCoinImgUrl } from '../core/utils';
import { Animations } from '../core/animations';
import { DecimalPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CoinItem } from '../core/interfaces';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-block-list',
    templateUrl: './block-list.component.html',
    styleUrls: ['./block-list.component.scss'],
    animations: [Animations.listItemLoadAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxIconButtonDirective, ReactiveFormsModule, IGX_LIST_DIRECTIVES, IgxAvatarComponent, DecimalPipe, IgxFilterPipe]
})
export class BlockListComponent {
  private readonly data = inject(DataService);

  readonly searchControl = new FormControl('', { nonNullable: true });
  readonly searchCrypto = toSignal(
    this.searchControl.valueChanges.pipe(startWith(this.searchControl.value)),
    { initialValue: '' }
  );
  readonly remoteData = toSignal(
    this.data.getData().pipe(map(items => sortDataByKey(items, 'rank'))),
    { initialValue: [] as CoinItem[] }
  );
  readonly filterCryptos = computed(() => {
    const fo = new IgxFilterOptions();
    fo.key = 'fullName';
    fo.inputValue = this.searchCrypto();
    return fo;
  });

  clearSearch(): void {
    this.searchControl.setValue('');
  }

  public getCoinImage(imageUrl: string): string {
    return transformCoinImgUrl(imageUrl);
  }
}
