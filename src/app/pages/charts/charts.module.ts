import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

export const ChartRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Chart',
      status: false
    },
    children: [
      {
        path: 'google',
        loadChildren: './google/google.module#GoogleModule'
      }, {
        path: 'echart',
        loadChildren: './echart/echart.module#EchartModule'
      }, {
        path: 'chart-js',
        loadChildren: './chart-js/chart-js.module#ChartJsModule'
      }, {
        path: 'knob',
        loadChildren: './knob/knob.module#KnobModule'
      }, {
        path: 'peity',
        loadChildren: './peity/peity.module#PeityModule'
      }, {
        path: 'radial',
        loadChildren: './radial/radial.module#RadialModule'
      }, {
        path: 'sparklines',
        loadChildren: './sparklines/sparklines.module#SparklinesModule'
      }, {
        path: 'c3-js',
        loadChildren: './c3-js/c3-js.module#C3JsModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChartRoutes),
    SharedModule
  ],
  declarations: [ChartsComponent]
})
export class ChartsModule { }
