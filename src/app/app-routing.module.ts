import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TourListComponent} from './home/tour/tour-list/tour-list.component';
import {ToursResolve} from './home/resolvers/tours.resolver';
import {TourResolve} from './home/resolvers/tour.resolver';
import {TourDetailComponent} from './home/tour/tour-detail/tour-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tour',
    pathMatch: 'full'
  },
  {
    path: 'tour',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: TourListComponent,
        resolve: {tours: ToursResolve}
      },
      {
        path: ':id',
        component: TourDetailComponent,
        resolve: {tour: TourResolve}
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/tour',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
