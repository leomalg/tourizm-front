import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tour} from '../home/model/tour.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  API_URL = 'http://localhost:8080/tours';

  constructor(private httpClient: HttpClient) { }

  getAllTour(): Observable<Tour[]> {
    return this.httpClient.get<Tour[]>(this.API_URL);
  }
}
