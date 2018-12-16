import {NgModule }from '@angular/core'; 
import {CommonModule }from '@angular/common'; 
import {UserComponent }from './user.component'; 
import {RouterModule, Routes}from '@angular/router'; 
import {SharedModule }from '../../shared/shared.module'; 
import {ProfileService }from './profile/profile.service'; 
import {FileUploadModule} from "ng2-file-upload";



export const UserRoutes:Routes = [ {
    path:'', 
    data: {
      breadcrumb:'User Profile', 
      status:false
    }, 
    children:[ {
        path:'profile', 
        loadChildren:'./profile/profile.module#ProfileModule'
      }
    ]
  }
]; 

@NgModule( {
  imports:[
    CommonModule, 
    RouterModule.forChild(UserRoutes), 
    SharedModule,
    FileUploadModule
  ], 
  declarations:[UserComponent], 
  providers:[ProfileService]
})
export class UserModule {}
