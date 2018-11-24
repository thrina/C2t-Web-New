import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingComponent } from './paging.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

export const pagingRoutes: Routes = [
  {
    path: '',
    component: PagingComponent,
    data: {
      breadcrumb: 'Table Paging',
      icon: 'icofont-table bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pagingRoutes),
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [PagingComponent]
})
export class PagingModule { }
