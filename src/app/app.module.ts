import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HomeComponent} from './home/home.component';
import {TourListComponent} from './home/tour/tour-list/tour-list.component';
import {CreateTourComponent} from './home/tour/create-tour/create-tour.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TourDetailComponent} from './home/tour/tour-detail/tour-detail.component';
import {StepListComponent} from './home/step/step-list/step-list.component';
import {CreateStepComponent} from './home/step/create-step/create-step.component';
import {ErrorComponent} from './errors/error.component';
import {ErrorInterceptor} from './interceptors/error-interceptor.service';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourListComponent,
    CreateTourComponent,
    TourDetailComponent,
    StepListComponent,
    CreateStepComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateTourComponent,
    CreateStepComponent,
    ErrorComponent
  ]
})
export class AppModule {
}
