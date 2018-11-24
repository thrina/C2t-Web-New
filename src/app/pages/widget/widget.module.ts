import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

export const WidgetRoutes: Routes = [{
  path: '',
  component: WidgetComponent,
  data: {
    breadcrumb: 'Widget',
    icon: 'icofont-speed-meter bg-c-blue',
    status: false
  },
  children: [
    {
      path: 'static',
      loadChildren: './widget-static/widget-static.module#WidgetStaticModule'
    },
    {
      path: 'data',
      loadChildren: './widget-data/widget-data.module#WidgetDataModule'
    },
    {
      path: 'chart',
      loadChildren: './widget-chart/widget-chart.module#WidgetChartModule'
    },
    {
      path: 'advanced',
      loadChildren: './widget-advance/widget-advance.module#WidgetAdvanceModule'
    }
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WidgetRoutes),
    SharedModule
  ],
  declarations: [WidgetComponent]
})
export class WidgetModule { }
