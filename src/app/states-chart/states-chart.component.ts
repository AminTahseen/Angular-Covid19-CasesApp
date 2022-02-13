import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Subject } from 'rxjs';
import { CovidApiService } from '../shared/services/covid-api.service';
@Component({
  selector: 'app-states-chart',
  templateUrl: './states-chart.component.html',
  styleUrls: ['./states-chart.component.css'],
})
export class StatesChartComponent implements OnInit {
  covidStateCase: any;
  @Input() stateSelected: any;
  public static yourString: Subject<string> = new Subject<string>();
  myChart: any;
  constructor(private covidApiService: CovidApiService) {
    StatesChartComponent.yourString.subscribe((res) => {
      console.log('update : ' + JSON.stringify(res));
      this.myChart.destroy();
      this.getStateCases(res);
    });
  }

  ngOnInit() {
    this.getStateCases(this.stateSelected);
  }

  getStateCases(stateCase: string) {
    this.covidApiService.getStateCases(stateCase).subscribe((res) => {
      this.covidStateCase = res;
      this.buildChart(
        this.covidStateCase.positive,
        this.covidStateCase.negative,
        this.covidStateCase.death * 10
      );
    });
  }
  buildChart(val1: number, val2: number, val3: number) {
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Positive Cases', 'Negative Cases', 'Death Reports'],
        datasets: [
          {
            label: 'Current Reports',
            data: [val1, val2, val3],
            backgroundColor: [
              'rgba(255, 206, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 206, 86, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
