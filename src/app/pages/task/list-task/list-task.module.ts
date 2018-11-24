import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './list-task.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';

export const listRoutes: Routes = [
  {
    path: '',
    component: ListTaskComponent,
    data: {
      breadcrumb: 'Task List',
      icon: 'icofont icofont-tasks-alt bg-c-pink',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(listRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  declarations: [
    ListTaskComponent
  ]
})
export class ListTaskModule { }
