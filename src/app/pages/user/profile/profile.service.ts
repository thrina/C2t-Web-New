import { HttpHeaders } from '@angular/common/http';
import {Observable }from 'rxjs'; 
import {Injectable }from '@angular/core'; 
import {HttpClient }from '@angular/common/http'; 
import {environment as process }from '../../../../environments/environment'; 


@Injectable()
export class ProfileService {

  constructor(private http:HttpClient) {}

  updateUser(userDetails:any):Observable < any >  {
    console.log("The user details are ");
    console.log(userDetails);
    return  this.http.put(process.url + "/updateuser", userDetails)
  }
  
  getUpdatedInfo(user:any): Observable <any> {
    return this.http.get(process.url + "/getuser",user)
  }

  createPortfolio(data:any): Observable <any>  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'multipart/form-data');

    return this.http.post(process.url + "/portfolio/create",data, { headers: headers})
  }

  getPortfolios(params:any): Observable<any>  {
    let url = process.url + "/portfolio/list" +"?"+ this.queryString(params);
    return this.http.get(url);
  }

  createTeamMember(data:any): Observable <any>  {
    return this.http.post(process.url + "/team/create",data)
  }

  getTeamList(params:any): Observable<any>  {
    let url = process.url + "/team/list" +"?"+ this.queryString(params);
    return this.http.get(url);
  }

  createBussiness(data:any): Observable <any>  {
    return this.http.post(process.url + "/business/create",data)
  }

  getBussiness(params:any): Observable<any>  {
    let url = process.url + "/business/list" +"?"+ this.queryString(params);
    return this.http.get(url);
  }

  queryString(query:any)  {
    let queryString = Object.entries(query).map(([key, val]) => `${key}=${val}`).join('&');
     return queryString;
 }

}