import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparklinesComponent } from './sparklines.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const sparklineRoutes: Routes = [
  {
    path: '',
    component: SparklinesComponent,
    data: {
      breadcrumb: 'Sparklines Chart',
      icon: 'icofont-chart-bar-graph bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sparklineRoutes),
    SharedModule
  ],
  declarations: [SparklinesComponent]
})
export class SparklinesModule { }
