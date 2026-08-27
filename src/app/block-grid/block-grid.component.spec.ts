import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { IgxExcelExporterService } from '@infragistics/igniteui-angular/grids/core';
import { of } from 'rxjs';
import { BlockGridComponent } from './block-grid.component';
import { DataService } from '../services/data.service';

describe('BlockGridComponent', () => {
  beforeEach(async () => {
    TestBed.overrideComponent(BlockGridComponent, {
      set: { template: '', imports: [] }
    });

    await TestBed.configureTestingModule({
      imports: [BlockGridComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideAnimations(),
        provideRouter([]),
        { provide: DataService, useValue: { getData: () => of([]) } },
        { provide: IgxExcelExporterService, useValue: { export: () => undefined } }
      ]
    }).compileComponents();
  });

  it('creates in zoneless mode', () => {
    const fixture = TestBed.createComponent(BlockGridComponent);

    expect(fixture.componentInstance).toBeTruthy();
  });
});
