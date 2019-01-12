import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as process } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

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
