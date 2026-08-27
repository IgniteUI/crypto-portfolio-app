import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { PortfolioComponent } from './portfolio.component';
import { ItemService } from '../services/block-item.service';
import { DataService } from '../services/data.service';

describe('PortfolioComponent', () => {
  beforeEach(async () => {
    TestBed.overrideComponent(PortfolioComponent, {
      set: { template: '', imports: [] }
    });

    await TestBed.configureTestingModule({
      imports: [PortfolioComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideAnimations(),
        provideRouter([]),
        {
          provide: ItemService,
          useValue: {
            getItemsList: () => of([]),
            createItem: () => undefined,
            updateItem: () => undefined,
            deleteItem: () => undefined
          }
        },
        {
          provide: DataService,
          useValue: {
            getSpecificCoinData: () => of(null),
            getCryptoIdFromSymbol: () => of(null)
          }
        }
      ]
    }).compileComponents();
  });

  it('creates in zoneless mode', () => {
    const fixture = TestBed.createComponent(PortfolioComponent);

    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.componentInstance.totalPortfolioValue()).toBe(0);
  });
});
