import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../shared/services/covid-api.service';

@Component({
  selector: 'app-states-list',
  templateUrl: './states-list.component.html',
  styleUrls: ['./states-list.component.css'],
})
export class StatesListComponent implements OnInit {
  stateList: any = [];
  p: number = 1;

  constructor(public covidApiService: CovidApiService) {}

  ngOnInit() {
    this.getAllStates();
  }

  getAllStates() {
    this.covidApiService.getAllStates().subscribe((res) => {
      this.stateList = res;
      this.stateList.forEach((element: any) => {
        console.log(JSON.stringify(element.state + ' ' + element.name));
      });
    });
  }
}
