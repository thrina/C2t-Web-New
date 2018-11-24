import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildRowComponent } from './child-row.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

export const childRowRoutes: Routes = [
  {
    path: '',
    component: ChildRowComponent,
    data: {
      breadcrumb: 'Row Details',
      icon: 'icofont-table bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(childRowRoutes),
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [ChildRowComponent]
})
export class ChildRowModule { }
