import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as process } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AdvertisementsService {

  constructor(private http: HttpClient) { }

  getAdvertisements(params): Observable<any> {
    
    let url = process.url + "advertisement/list" +"?"+ this.queryString(params);
  
    return this.http.get(url);
  }

  queryString  (query)  {
    let queryString = Object.entries(query).map(([key, val]) => `${key}=${val}`).join('&');
     return queryString;
 }

}
