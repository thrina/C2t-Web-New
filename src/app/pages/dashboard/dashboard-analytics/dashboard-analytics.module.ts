import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAnalyticsComponent } from './dashboard-analytics.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';

export const DashboardAnalyticsRoutes: Routes = [
  {
    path: '',
    component: DashboardAnalyticsComponent,
    data: {
      breadcrumb: 'Analytics',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardAnalyticsRoutes),
    SharedModule,
    ChartModule
  ],
  declarations: [DashboardAnalyticsComponent]
})
export class DashboardAnalyticsModule { }
