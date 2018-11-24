import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmContactComponent } from './crm-contact.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';

export const CRMContactRoutes: Routes = [{
  path: '',
  component: CrmContactComponent,
  data: {
    breadcrumb: 'CRM Contact',
    icon: 'icofont-contacts bg-c-pink'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CRMContactRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  declarations: [CrmContactComponent]
})
export class CrmContactModule { }
