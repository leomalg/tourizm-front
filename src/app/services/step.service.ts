import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Step} from '../home/model/step.model';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  API_URL = 'steps';
  TOUR_URL = 'tours';

  constructor(private httpClient: HttpClient) {
  }

  getAllStep(): Observable<Step[]> {
    return this.httpClient.get<Step[]>(this.API_URL);
  }

  getStepByTourId(id: number): Observable<Step> {
    return this.httpClient.get<Step>(`${this.TOUR_URL}/${id}/${this.API_URL}`);
  }

  getStepById(id: number): Observable<Step> {
    return this.httpClient.get<Step>(`${this.API_URL}/${id}`);
  }

  createStep(step: Step): Observable<Step> {
    return this.httpClient.post<Step>(this.API_URL, step);
  }

  deleteStep(id: number): Observable<Step> {
    return this.httpClient.delete<Step>(`${this.API_URL}/${id}`);
  }
}
