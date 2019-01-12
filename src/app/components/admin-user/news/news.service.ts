import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as process } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(params): Observable<any> {
    
    let url = process.url + "/news/list" +"?"+ this.queryString(params);
  
    return this.http.get(url);
  }
  
  addNews(data):Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'multipart/form-data');
    return this.http.post(process.url + "/news/create", data, { headers: headers})
  }

  getCategories() {
    return this.http.get(process.url + "/category/list");
  }

    queryString  (query)  {
    let queryString = Object.entries(query).map(([key, val]) => `${key}=${val}`).join('&');
     return queryString;
 }
 

  

}
