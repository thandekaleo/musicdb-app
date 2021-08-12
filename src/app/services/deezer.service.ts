import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private httpClient: HttpClient) { }
  searchArtist(q: string): Observable<any> {
    const options = {
      params: { q: q }
    };
    return this.httpClient.get<any>('/api/search/artist', options)
  }

  getAlbums(q: string): Observable<any> {
    const options = {
      params: { q: q }
    };
    return this.httpClient.get<any>('/api/album', options)
  }


  getArtist(q: string): Observable<any> {
    return this.httpClient.get<any>('/api/artist/'+ q,{headers: { Accept: 'application/json' }})
  }


  getArtistAlbum(q: string): Observable<any> {
    return this.httpClient.get<any>('/api/artist/'+ q + '/albums',{headers: { Accept: 'application/json' }})
  }

  getTopTracks(q: string): Observable<any>{
    return this.httpClient.get('/api/artist/' + q + '/top?limit=5', {headers: { Accept: 'application/json' }});
  }

}
