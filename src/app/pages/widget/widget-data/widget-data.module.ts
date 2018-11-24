import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WidgetDataComponent, WidgetDataDirective} from './widget-data.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const WidgetDataRoutes: Routes = [
  {
    path: '',
    component: WidgetDataComponent,
    data: {
      breadcrumb: 'Widget',
      icon: 'icofont-speed-meter bg-c-blue'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WidgetDataRoutes),
    SharedModule
  ],
  declarations: [WidgetDataComponent,
    WidgetDataDirective]
})
export class WidgetDataModule { }
