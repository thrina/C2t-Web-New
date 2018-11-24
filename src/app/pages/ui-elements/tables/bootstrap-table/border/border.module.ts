import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderComponent } from './border.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';

export const borderRoutes: Routes = [
  {
    path: '',
    component: BorderComponent,
    data: {
      breadcrumb: 'Border Table',
      icon: 'icofont-table bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(borderRoutes),
    SharedModule
  ],
  declarations: [BorderComponent]
})
export class BorderModule { }
