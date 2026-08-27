import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { BlockListComponent } from './block-list.component';
import { DataService } from '../services/data.service';

describe('BlockListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockListComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideAnimations(),
        { provide: DataService, useValue: { getData: () => of([]) } }
      ]
    }).compileComponents();
  });

  it('creates in zoneless mode', () => {
    const fixture = TestBed.createComponent(BlockListComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
