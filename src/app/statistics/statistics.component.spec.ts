import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsComponent } from './statistics.component';
import { IgxFinancialChartModule } from 'igniteui-angular-charts/ES5/igx-financial-chart-module';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsComponent],
      imports: [IgxFinancialChartModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', done => {
    expect(component).toBeTruthy();
    fixture.whenStable().then(done);
  });
});
