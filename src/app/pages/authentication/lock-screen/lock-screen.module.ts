import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockScreenComponent } from './lock-screen.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const lockScreenRoutes: Routes = [
  {
    path: '',
    component: LockScreenComponent,
    data: {
      breadcrumb: 'Lock Screen'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lockScreenRoutes),
    SharedModule
  ],
  declarations: [LockScreenComponent]
})
export class LockScreenModule { }
