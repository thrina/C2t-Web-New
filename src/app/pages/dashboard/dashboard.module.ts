import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {SharedModule} from '../../shared/shared.module';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'ecommerce',
        loadChildren: './dashboard-ecommerce/dashboard-ecommerce.module#DashboardEcommerceModule'
      },
      {
        path: 'crm',
        loadChildren: './dashboard-crm/dashboard-crm.module#DashboardCrmModule'
      },
      {
        path: 'analytics',
        loadChildren: './dashboard-analytics/dashboard-analytics.module#DashboardAnalyticsModule'
      },
      {
        path: 'project',
        loadChildren: './dashboard-project/dashboard-project.module#DashboardProjectModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    SharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
