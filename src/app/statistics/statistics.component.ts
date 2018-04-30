import { Component } from '@angular/core';
import { AMZNData } from './data';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  public data = AMZNData;

}
