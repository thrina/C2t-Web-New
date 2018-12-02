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

}