import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ErrorComponent} from '../errors/error.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private modalService: NgbModal) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        () => {
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            const modalRef = this.modalService.open(ErrorComponent, { centered: true });
            modalRef.componentInstance.errors = err.error;
          }
        }
      )
    );
  }
}
