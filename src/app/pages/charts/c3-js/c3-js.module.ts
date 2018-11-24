import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C3JsComponent } from './c3-js.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const c3JsRoutes: Routes = [
  {
    path: '',
    component: C3JsComponent,
    data: {
      breadcrumb: 'C3 Chart',
      icon: 'icofont-chart-bar-graph bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(c3JsRoutes),
    SharedModule
  ],
  declarations: [C3JsComponent]
})
export class C3JsModule { }
