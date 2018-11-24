import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceComponent } from './advance.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const AdvanceRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Advance Components',
      status: false
    },
    children: [
      {
        path: 'modal',
        loadChildren: './modal/modal.module#ModalModule'
      }, {
        path: 'notifications',
        loadChildren: './notifications/notifications.module#NotificationsModule'
      }, {
        path: 'notify',
        loadChildren: './notify/notify.module#NotifyModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdvanceRoutes),
    SharedModule
  ],
  declarations: [AdvanceComponent]
})
export class AdvanceModule { }
