import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardProjectComponent } from './dashboard-project.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';

export const DashboardProjectRoutes: Routes = [
  {
    path: '',
    component: DashboardProjectComponent,
    data: {
      breadcrumb: 'Project',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardProjectRoutes),
    SharedModule,
    ChartModule
  ],
  declarations: [DashboardProjectComponent]
})
export class DashboardProjectModule { }
