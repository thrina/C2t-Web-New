import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as process } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AdminDashboardService {

  constructor(private http: HttpClient) { }

  getDashboardCount(): Observable<any> {
    return this.http.get(process.url + "/count/list");
  }

  getUsers(params): Observable<any>{
    let url = process.url + "/user/list" +"?"+ this.queryString(params);
    return this.http.get(url);
  }

  queryString  (query)  {
    let queryString = Object.entries(query).map(([key, val]) => `${key}=${val}`).join('&');
     return queryString;
 }

}
