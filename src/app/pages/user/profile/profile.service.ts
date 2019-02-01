import { HttpHeaders } from '@angular/common/http';
import {Observable }from 'rxjs'; 
import {Injectable }from '@angular/core'; 
import {HttpClient }from '@angular/common/http'; 
import {environment as process }from '../../../../environments/environment'; 


@Injectable()
export class ProfileService {

  constructor(private http:HttpClient) {}

  updateUser(userDetails:any):Observable < any >  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'multipart/form-data');
    let url = process.url + "/myaccount/"+userDetails.get("_id");
    return this.http.put(url,userDetails, { headers: headers});
  }

  // updateUserData(userDetails:any):Observable < any >  {
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('Accept', 'multipart/form-data');
  //   let url = process.url + "/myaccount/"+userDetails._id;
  //   return this.http.put(url,userDetails, { headers: headers});
  // }

  updateUserData(userDetails:any):Observable < any >  {
    console.log("The user details are ");
    console.log(userDetails);
    let url = process.url + "/myaccount/"+userDetails._id;
    return  this.http.put(url, userDetails);
  }
  

 deletePortfolio(id :any):Observable<any>{
  let url = process.url + "/portfolio/"+id._id;
  return this.http.delete(url);
}
deleteBuss(id :any):Observable<any>{
  let url = process.url + "/business/"+id._id;
  return this.http.delete(url);
}
deleteBussteam(id :any):Observable<any>{
  let url = process.url + "/team/"+id._id;
  return this.http.delete(url);
}
deleteBusPort(id :any):Observable<any>{
  let url = process.url + "/portfolio/"+id._id;
  return this.http.delete(url);
}

  getUpdatedInfo(user:any): Observable <any> {
    return this.http.get(process.url+"/myaccount/",user)
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
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'multipart/form-data');
    return this.http.post(process.url + "/team/create",data, { headers: headers})
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