import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StatisticsComponent } from './statistics.component';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IgxFinancialChartModule, StatisticsComponent]
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
