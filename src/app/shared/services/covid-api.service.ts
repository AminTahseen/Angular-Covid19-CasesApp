import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CovidApiService {
  readonly BASE_URL: string = 'https://api.covidtracking.com';

  constructor(private http: HttpClient) {}

  getAllStates() {
    return this.http.get(this.BASE_URL + '/v1/states/info.json');
  }
  getStateCases(id: string) {
    return this.http.get(this.BASE_URL + `/v1/states/${id}/current.json`);
  }
}
