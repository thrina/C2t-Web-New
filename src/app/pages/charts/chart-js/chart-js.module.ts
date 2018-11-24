import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartJsComponent } from './chart-js.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';

export const chartJsRoutes: Routes = [
  {
    path: '',
    component: ChartJsComponent,
    data: {
      breadcrumb: 'ChartJS Chart',
      icon: 'icofont-chart-bar-graph bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(chartJsRoutes),
    SharedModule,
    ChartModule
  ],
  declarations: [ChartJsComponent]
})
export class ChartJsModule { }
