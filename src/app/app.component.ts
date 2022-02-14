import { Component, ViewChild } from '@angular/core';
import { CovidApiService } from './shared/services/covid-api.service';
import { StatesChartComponent } from './states-chart/states-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Covid-CasesApp';
  stateList: any = [];
  stateSelected: any = 'ca';
  stateName: any = 'California';

  constructor(public covidApiService: CovidApiService) {}

  ngOnInit() {
    this.getAllStates();
  }

  getAllStates() {
    this.covidApiService.getAllStates().subscribe((res) => {
      this.stateList = res;
    });
  }
  myCallbackFunction(args: string, args2: string) {
    //callback code here
    this.stateSelected = args.toLowerCase();
    this.stateName = args2;
    StatesChartComponent.yourString.next(this.stateSelected);
    StatesChartComponent.stateString.next(this.stateName);
  }
}
