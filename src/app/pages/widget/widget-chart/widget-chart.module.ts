import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetChartComponent } from './widget-chart.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const WidgetChartRoutes: Routes = [
  {
    path: '',
    component: WidgetChartComponent,
    data: {
      breadcrumb: 'Widget',
      icon: 'icofont-speed-meter bg-c-blue'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WidgetChartRoutes),
    SharedModule
  ],
  declarations: [WidgetChartComponent]
})
export class WidgetChartModule { }
