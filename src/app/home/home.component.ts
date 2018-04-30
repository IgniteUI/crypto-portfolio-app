import { Component, OnInit, NgModule } from '@angular/core';
import { DataService  } from '../data.service';
import { IgxFilterOptions } from 'igniteui-angular/main';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Welcome to IgniteUI for Angular!';
  objectKeys = Object.keys;
  cryptos: any;
  public search1: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPrices()
      .subscribe(res => {
        this.cryptos = res;
      });
  }

  get fo1() {
    const _fo = new IgxFilterOptions();
    _fo.key = 'name';
    _fo.inputValue = this.search1 ? this.search1 : '';
    return _fo;
}
}
