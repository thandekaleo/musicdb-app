import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Error } from '../../models/error/error.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errorSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  errorMap: Map<string, Error> = new Map<string, Error>();

  setError(error: boolean, url: string, response: HttpResponse<any>): void {
    console.log(error, url, response);
    if (!url) {
      throw new Error('The request URL must be provided to the ErrorService.setError function');
    }

    console.log(response);

    if (error) {
      /* eslint-disable */
      const errors = response.body.errors;
      console.log(errors);
      for (const err of errors) {
        const newError: Error = {
          url: url + '/' + err.path.join(','),
          hasError: true,
          errorText: err.message,
          description: `${JSON.stringify(
            err.extensions.exception
          )}`,
          errorCode: response.status
        };
        this.errorMap.set(err.extensions.exception.config, newError);
      }
      this.errorSub.next(true);
    } else {
      this.errorMap.delete(url);
    }

    if (this.errorMap.size === 0) {
      this.errorSub.next(false);
    }
  }

  setErrorResponse(
    error: boolean,
    url: string,
    response: HttpErrorResponse
  ): void {
    if (!url) {
      throw new Error(
        'The request URL must be provided to the ErrorService.setError function'
      );
    }

    if (error === true) {
      const newError: Error = {
        url,
        hasError: true,
        errorText: JSON.stringify(response.error),
        description: response.statusText,
        errorCode: response.status
      };
      this.errorMap.set(url, newError);
      this.errorSub.next(true);
    } else if (error === false) {
      this.errorMap.delete(url);
    }
    if (this.errorMap.size === 0) {
      this.errorSub.next(false);
    }
  }
}
