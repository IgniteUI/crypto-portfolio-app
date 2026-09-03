import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LoadingSpinnerComponent } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingSpinnerComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
  });

  it('creates in zoneless mode', () => {
    const fixture = TestBed.createComponent(LoadingSpinnerComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
