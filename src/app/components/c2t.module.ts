import {NgModule }from '@angular/core'; 
import {CommonModule }from '@angular/common'; 
import {RouterModule, Routes }from '@angular/router'; 
import {HttpClientModule }from '@angular/common/http'; 

import {C2TComponent }from './c2t.component'; 
import {SignupComponent}from './signup/signup.component'; 
import {SharedModule}from '../shared/shared.module'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
// import { CarouselModule } from 'ngx-bootstrap';
// import { CarouselConfig } from 'ngx-bootstrap/carousel';


export const c2tRoutes:Routes = [ {
    path:'', 
    component:C2TComponent, 
    children:[ {
        path:'signup', 
        component:SignupComponent
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
    HttpClientModule
  ], 
  declarations: [C2TComponent, SignupComponent]
})
export class C2TModule {}
