import {Observable }from 'rxjs'; 
import {Injectable }from '@angular/core'; 
import {HttpClient }from '@angular/common/http'; 
import {environment as process }from '../../../../environments/environment'; 


@Injectable()
export class ProfileService {

    constructor(private http:HttpClient) {}

    updateUser(userDetails):Observable < any >  {
      return  this.http.put(process.url + "/updateuser", userDetails)
    
  }
  
  getUpdatedInfo(user): Observable <any> {
    return this.http.get(process.url + "/getuser",user)
  }

  createPortfolio(data): Observable <any>  {
    return this.http.post(process.url + "/portfolio/create",data)
  }

  getPortfolios(params): Observable<any>  {
    let url = process.url + "/portfolio/list" +"?"+ this.queryString(params);
    return this.http.get(url);
  }

  createTeamMember(data): Observable <any>  {
    return this.http.post(process.url + "/team/create",data)
  }

  getTeamList(params): Observable<any>  {
    let url = process.url + "/team/list" +"?"+ this.queryString(params);
    return this.http.get(url);
  }

  createBussiness(data): Observable <any>  {
    return this.http.post(process.url + "/business/create",data)
  }

  getBussiness(params): Observable<any>  {
    let url = process.url + "/business/list" +"?"+ this.queryString(params);
    return this.http.get(url);
  }

  queryString  (query)  {
    let queryString = Object.entries(query).map(([key, val]) => `${key}=${val}`).join('&');
     return queryString;
 }

}