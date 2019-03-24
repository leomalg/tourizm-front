import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Tour} from '../model/tour.model';
import {TourService} from '../../services/tour.service';
import {Observable, of} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToursResolve implements Resolve<Tour[]> {
  constructor(private tourService: TourService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tour[]> {
    // return of([]);
    return this.tourService.getAllTour();
  }
}
