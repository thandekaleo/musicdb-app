import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class User {
  id!: string;
  name!: string;
  email!: string;
  phone!: number;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  endPoint = 'http://localhost:4200';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getUsers(): Observable<User> {
    return this.httpClient.get<User>(this.endPoint + '/users')
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(this.endPoint + '/users/' + id)
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
