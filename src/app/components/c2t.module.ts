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
import { AddNewsComponent } from './admin-user/news/add-news/add-news.component';
import {QuillEditorModule} from 'ngx-quill-editor';
import {FileUploadModule} from "ng2-file-upload";
import { AddEventsComponent } from './admin-user/events/add-events/add-events.component';
import { AddAdvertisementComponent } from './admin-user/advertisements/add-advertisement/add-advertisement.component';
import {NewsService }from './admin-user/news/news.service'; 
import {EventsService }from './admin-user/events/events.service'; 
import { AdvertisementService } from './admin-user/advertisements/advertisement.service';
import { AdminDashboardService } from './admin-user/admin-dashboard/admin-dashboard.service';


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
    UiSwitchModule,
    QuillEditorModule,
    FileUploadModule
  ], 
  declarations: [C2TComponent, SignupComponent, AdminDashboardComponent, NewsComponent, EventsComponent, AdvertisementsComponent, AddNewsComponent, AddEventsComponent, AddAdvertisementComponent],
  providers:[NewsService,EventsService, AdvertisementService, AdminDashboardService]
})
export class C2TModule {}
