import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockGridComponent } from './block-grid.component';
import { IgxGridModule } from 'igniteui-angular';

describe('BlockGridComponent', () => {
  let component: BlockGridComponent;
  let fixture: ComponentFixture<BlockGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IgxGridModule, BlockGridComponent]
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
