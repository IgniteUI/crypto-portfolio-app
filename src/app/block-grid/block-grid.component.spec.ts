import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockGridComponent } from './block-grid.component';
import { IgxGridModule } from 'igniteui-angular';

describe('BlockGridComponent', () => {
  let component: BlockGridComponent;
  let fixture: ComponentFixture<BlockGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockGridComponent ],
      imports: [ IgxGridModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
