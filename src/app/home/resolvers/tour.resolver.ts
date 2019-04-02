import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Tour} from '../model/tour.model';
import {TourService} from '../../services/tour.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TourResolve implements Resolve<Tour> {
  constructor(private tourService: TourService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tour> {
    const idStr = 'id';
    const id = route.params[idStr];
    return this.tourService.getTourById(id);
  }
}
