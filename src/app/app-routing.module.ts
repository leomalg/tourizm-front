import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TourListComponent} from './home/tour/tour-list/tour-list.component';
import {ToursResolve} from './home/resolvers/tour.resolver';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: TourListComponent,
        resolve: {tours: ToursResolve}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
