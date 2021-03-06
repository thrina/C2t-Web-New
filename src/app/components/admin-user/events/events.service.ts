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
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'multipart/form-data');
    return this.http.post(process.url + "/event/create", data, { headers: headers})
  }
  queryString  (query)  {
    let queryString = Object.entries(query).map(([key, val]) => `${key}=${val}`).join('&');
     return queryString;
 }
 deleteEvent(id :any):Observable<any>{
  let url = process.url + "/event/"+id._id;
  return this.http.delete(url);
 }
}
