import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tour} from '../home/model/tour.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  API_URL = 'tours';

  constructor(private httpClient: HttpClient) { }

  getAllTour(): Observable<Tour[]> {
    return this.httpClient.get<Tour[]>(this.API_URL);
  }

  createTour(tour: Tour) {

    this.httpClient.post<Tour>(this.API_URL, tour);
  }

  deleteTour(id: number): Observable<Tour> {
    return this.httpClient.delete<Tour>(`${this.API_URL}/${id}`);
  }
}
