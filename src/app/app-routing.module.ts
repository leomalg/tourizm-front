import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TourListComponent} from './home/tour/tour-list/tour-list.component';
import {ToursResolve} from './home/resolvers/tours.resolver';
import {TourResolve} from './home/resolvers/tour.resolver';

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
        component: TourListComponent,
        resolve: {tour: TourResolve},
        data: {id: 'id'}
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
