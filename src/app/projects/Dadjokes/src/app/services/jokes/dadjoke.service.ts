import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadJokeService {
  constructor(private http: HttpClient) {}

  getRandom(): Observable<any> {
    return this.http.get(`${environment.apiUrl}`, { headers: { Accept: 'application/json' }});
  }

  searchJokes(query: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/search`, { params: { term: query }, headers: { Accept: 'application/json' }});
  }
}
