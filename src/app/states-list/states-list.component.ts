import { Component, Input, OnInit } from '@angular/core';
import { CovidApiService } from '../shared/services/covid-api.service';

@Component({
  selector: 'app-states-list',
  templateUrl: './states-list.component.html',
  styleUrls: ['./states-list.component.css'],
})
export class StatesListComponent implements OnInit {
  @Input() stateListData: any;
  @Input() callbackFunction: any;

  p: number = 1;

  constructor(public covidApiService: CovidApiService) {}

  ngOnInit() {}

  setStateValue(args: string) {
    this.callbackFunction(args);
  }
}
