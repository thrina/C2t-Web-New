import {BrowserModule }from '@angular/platform-browser'; 
import {NgModule }from '@angular/core'; 
import {RouterModule}from '@angular/router'; 

import {AppRoutes}from './app.routing'; 

import {AppComponent }from './app.component'; 
import {AdminComponent }from './layout/admin/admin.component'; 
import {ClickOutsideModule}from 'ng-click-outside'; 
import {SharedModule}from './shared/shared.module'; 
import {BrowserAnimationsModule}from '@angular/platform-browser/animations'; 
import {BreadcrumbsComponent}from './layout/admin/breadcrumbs/breadcrumbs.component'; 
import {TitleComponent}from './layout/admin/title/title.component'; 
import {AuthComponent}from './layout/auth/auth.component'; 
import {FormsModule, ReactiveFormsModule }from '@angular/forms'; 
import {HomeComponent }from './components/home/home.component'; 
import {HomeService }from './components/home/home.service'; 
import {HttpClientModule }from '@angular/common/http'; 
import {JoinUsComponent }from './components/join-us/join-us.component'; 


@NgModule( {
  declarations:[
    AppComponent, 
    AdminComponent, 
    BreadcrumbsComponent, 
    TitleComponent, 
    AuthComponent, 
    HomeComponent,
    JoinUsComponent
  ], 
  imports:[
    BrowserModule, 
    BrowserAnimationsModule, 
    RouterModule.forRoot(AppRoutes), 
    ClickOutsideModule, 
    SharedModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule
  ], 
  providers:[HomeService], 
  bootstrap:[AppComponent, HomeComponent]
})
export class AppModule {}
