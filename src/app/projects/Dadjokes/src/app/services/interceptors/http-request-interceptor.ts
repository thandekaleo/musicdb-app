import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorService } from '..';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private error: ErrorService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const results = event.body;
          if (results.errors !== undefined) {
            this.error.setError(true, request.url, event);
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.error.setErrorResponse(true, request.url, error);
        return throwError(error);
      })
    );
  }
}
