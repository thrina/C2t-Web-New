import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCrmComponent } from './dashboard-crm.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const DashboardCrmRoutes: Routes = [
  {
    path: '',
    component: DashboardCrmComponent,
    data: {
      breadcrumb: 'CRM',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardCrmRoutes),
    SharedModule
  ],
  declarations: [DashboardCrmComponent]
})
export class DashboardCrmModule { }
