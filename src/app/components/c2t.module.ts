import {NgModule }from '@angular/core'; 
import {CommonModule }from '@angular/common'; 
import {RouterModule, Routes }from '@angular/router'; 
import {HttpClientModule }from '@angular/common/http'; 

import {C2TComponent }from './c2t.component'; 
import { SignupComponent } from './signup/signup.component'; 
import {AdminDashboardComponent}from './admin-user/admin-dashboard/admin-dashboard.component'; 
import {SharedModule}from '../shared/shared.module'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { NewsComponent } from './admin-user/news/news.component';

export const c2tRoutes:Routes = [ {
    path:'', 
    component:C2TComponent, 
    children:[ {
        path:'signup', 
        component:SignupComponent
    },
    {
      path:'dashboard', 
      component:AdminDashboardComponent
    },
    {
      path:'news', 
      component:NewsComponent
    }
    ]
  }
]; 

@NgModule( {
  imports:[
    CommonModule, 
    RouterModule.forChild(c2tRoutes), 
    SharedModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    NgxDatatableModule
  ], 
  declarations: [C2TComponent, SignupComponent, AdminDashboardComponent, NewsComponent]
})
export class C2TModule {}
