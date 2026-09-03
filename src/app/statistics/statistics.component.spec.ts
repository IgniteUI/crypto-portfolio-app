import { Component, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { IComboSelectionChangingEventArgs } from '@infragistics/igniteui-angular/combo';
import { of } from 'rxjs';
import { CoinItem } from '../core/interfaces';
import { DataService } from '../services/data.service';
import { StatisticsComponent } from './statistics.component';

@Component({
  selector: 'app-test-combo',
  template: ''
})
class TestComboComponent {
  selection: string[] = [];

  select(values: readonly unknown[]): void {
    this.selection = values.filter((value): value is string => typeof value === 'string');
  }
}

describe('StatisticsComponent', () => {
  beforeEach(async () => {
    const bitcoin = Object.assign(new CoinItem(), {
      id: '1',
      name: 'BTC',
      fullName: 'Bitcoin'
    });

    TestBed.overrideComponent(StatisticsComponent, {
      set: {
        template: '<app-test-combo #combo></app-test-combo>',
        imports: [TestComboComponent]
      }
    });

    await TestBed.configureTestingModule({
      imports: [StatisticsComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideAnimations(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: { cryptoName: 'BTC' },
              paramMap: convertToParamMap({})
            }
          }
        },
        {
          provide: DataService,
          useValue: {
            getData: () => of([bitcoin]),
            getHistoricalData: (symbol: string) => of({ data: [], symbol })
          }
        }
      ]
    }).compileComponents();
  });

  it('selects and renders the initial series without a second change-detection pass', async () => {
    const fixture = TestBed.createComponent(StatisticsComponent);
    fixture.detectChanges();
    await fixture.whenStable();

    expect(fixture.componentInstance.combo().selection).toContain('BTC');
    expect(fixture.componentInstance.data().map(series => series.title)).toContain('Bitcoin');
  });

  it('loads a newly selected series outside the constructor injection context', () => {
    const fixture = TestBed.createComponent(StatisticsComponent);
    fixture.detectChanges();
    const ethereum = { name: 'Ethereum', symbol: 'ETH' };
    const event = {
      owner: fixture.componentInstance.combo(),
      oldValue: [],
      newValue: ['BTC', 'ETH'],
      oldSelection: [],
      newSelection: [ethereum],
      added: [ethereum],
      removed: [],
      displayText: 'Bitcoin, Ethereum',
      cancel: false
    } as IComboSelectionChangingEventArgs;

    expect(() => fixture.componentInstance.onSelectionChanging(event)).not.toThrow();
    expect(fixture.componentInstance.data().map(series => series.title)).toContain('Ethereum');
  });
});
