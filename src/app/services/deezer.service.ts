import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private httpClient: HttpClient) { }
  searchArtist(): Observable<any> {
    return this.httpClient.get<any>('')
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  httpError(error: { error: { message: string; }; status: any; message: any; }) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
