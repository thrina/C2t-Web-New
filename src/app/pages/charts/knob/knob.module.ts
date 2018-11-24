import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnobComponent } from './knob.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const knobRoutes: Routes = [
  {
    path: '',
    component: KnobComponent,
    data: {
      breadcrumb: 'Knob Chart',
      icon: 'icofont-chart-bar-graph bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(knobRoutes),
    SharedModule
  ],
  declarations: [KnobComponent]
})
export class KnobModule { }
