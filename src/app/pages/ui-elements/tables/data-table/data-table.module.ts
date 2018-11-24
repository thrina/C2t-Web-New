import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

export const DataTableRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Data Tables',
      status: false
    },
    children: [
      {
        path: 'basic',
        loadChildren: './basic-datatable/basic-datatable.module#BasicDatatableModule'
      }, {
        path: 'editable',
        loadChildren: './inline-edit/inline-edit.module#InlineEditModule'
      }, {
        path: 'row-details',
        loadChildren: './child-row/child-row.module#ChildRowModule'
      }, {
        path: 'paging',
        loadChildren: './paging/paging.module#PagingModule'
      }, {
        path: 'selection',
        loadChildren: './selection/selection.module#SelectionModule'
      }, {
        path: 'other',
        loadChildren: './other-datatable/other-datatable.module#OtherDatatableModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DataTableRoutes),
    SharedModule
  ],
  declarations: [DataTableComponent]
})
export class DataTableModule { }
