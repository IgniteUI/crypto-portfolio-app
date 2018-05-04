import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { employeesData } from './localData';

@Component({
  selector: 'app-block-grid',
  templateUrl: './block-grid.component.html',
  styleUrls: ['./block-grid.component.css']
})
export class BlockGridComponent implements OnInit {
  public localData: any[];
  title = 'block-grid';
  constructor() { }

  ngOnInit() {
    this.localData = employeesData;
  }
}
