import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as process } from '../../../../environments/environment';

@Injectable()
export class AdvertisementService {

  constructor(private http: HttpClient) { }

  getAdvertisements(params): Observable<any> {
    
    let url = process.url + "/advertisement/list" +"?"+ this.queryString(params);
  
    return this.http.get(url);
  }
  
  addAdvertisement(data):Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'multipart/form-data');
    return this.http.post(process.url + "/advertisement/create", data, { headers: headers})
  }
  queryString  (query)  {
    let queryString = Object.entries(query).map(([key, val]) => `${key}=${val}`).join('&');
     return queryString;
 }
 deleteAdvertisement(id :any):Observable<any>{
  let url = process.url + "/advertisement/"+id._id;
  return this.http.delete(url);
 }

}
