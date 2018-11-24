import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherDatatableComponent } from './other-datatable.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule} from '@angular/forms';

export const otherRoutes: Routes = [
  {
    path: '',
    component: OtherDatatableComponent,
    data: {
      breadcrumb: 'Other',
      icon: 'icofont-table bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(otherRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  declarations: [OtherDatatableComponent]
})
export class OtherDatatableModule { }
