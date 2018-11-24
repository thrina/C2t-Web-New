import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {ParentRemoveDirective} from '../../../../shared/element/parent-remove.directive';

export const AlertRoutes: Routes = [
  {
    path: '',
    component: AlertComponent,
    data: {
      breadcrumb: 'Alert',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AlertRoutes),
    SharedModule
  ],
  declarations: [
    AlertComponent,
    ParentRemoveDirective
  ]
})
export class AlertModule { }
