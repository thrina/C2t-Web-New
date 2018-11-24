import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueTaskComponent } from './issue-task.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';

export const issueRoutes: Routes = [
  {
    path: '',
    component: IssueTaskComponent,
    data: {
      breadcrumb: 'Task Issue',
      icon: 'icofont icofont-tasks-alt bg-c-pink',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(issueRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  declarations: [
    IssueTaskComponent
  ]
})
export class IssueTaskModule { }
