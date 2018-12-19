import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as process } from '../../../../environments/environment';

@Injectable()
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(params): Observable<any> {
    
    let url = process.url + "/event/list" +"?"+ this.queryString(params);
  
    return this.http.get(url);
  }
  
  addEvent(data):Observable<any> {
    return this.http.post(process.url + "/event/create", data)
    
  }
  queryString  (query)  {
    let queryString = Object.entries(query).map(([key, val]) => `${key}=${val}`).join('&');
     return queryString;
 }
}
