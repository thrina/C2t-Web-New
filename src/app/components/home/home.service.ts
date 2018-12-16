import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as process } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

    constructor(private http: HttpClient) { }


    getRegistered(data):Observable<any> {
        return this.http.post(process.url + "/signup", data);
    }

    getRegisteredDetails() {
        this.http.get(process.url + "/users").subscribe(data => {
            console.log(data, "userssssssssssssssssssssss");
            return data;
        })
    }

    userLogin(data): Observable<any> {
        let rawData: any;
        return this.http.post(process.url + "/login", data)
    }

    getNews(): Observable<any> {    
        return this.http.get( process.url + "/news/list" );
      }

}
