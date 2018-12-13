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
import {TagInputModule} from 'ngx-chips';
import { UiSwitchModule } from 'ng2-ui-switch/dist';
import { EventsComponent } from './admin-user/events/events.component';

import { AdvertisementsComponent } from './admin-user/advertisements/advertisements.component';


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
    },
    {
      path:'events', 
      component:EventsComponent
    },
    {
      path:'advertisements', 
      component:AdvertisementsComponent
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
    NgxDatatableModule,
    TagInputModule,
    UiSwitchModule
  ], 
  declarations: [C2TComponent, SignupComponent, AdminDashboardComponent, NewsComponent, EventsComponent, AdvertisementsComponent]
})
export class C2TModule {}
