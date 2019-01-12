import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as process } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

    constructor(private http: HttpClient) { }


    getRegistered(data): Observable<any> {
        return this.http.post(process.url + "/myaccount/signup", data);
    }

    getRegisteredDetails() {
        this.http.get(process.url + "/users").subscribe(data => {
            return data;
        })
    }

    userLogin(data): Observable<any> {
        let rawData: any;
        return this.http.post(process.url + "/myaccount/login", data)
    }

    getNews(): Observable<any> {
        return this.http.get(process.url + "/news/list");
    }

    getEvents(): Observable<any> {
        return this.http.get(process.url + "/event/list");
    }
    getSearch(params): Observable<any> {
        let url = process.url + "/search/list" +"?"+ this.queryString(params);
        console.log("search string is",url);
        return this.http.get(url);
      }
      queryString (query)  {
          let queryString = Object.entries(query).map(([key, val]) => `${key}=${val}`).join('&');
          return queryString;
      }
}
