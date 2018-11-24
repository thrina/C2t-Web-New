import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetStaticComponent } from './widget-static.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const WidgetStaticRoutes: Routes = [
  {
    path: '',
    component: WidgetStaticComponent,
    data: {
      breadcrumb: 'Widget',
      icon: 'icofont-speed-meter bg-c-blue'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WidgetStaticRoutes),
    SharedModule
  ],
  declarations: [WidgetStaticComponent]
})
export class WidgetStaticModule { }
