import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeityComponent } from './peity.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const peityRoutes: Routes = [
  {
    path: '',
    component: PeityComponent,
    data: {
      breadcrumb: 'Peity Chart',
      icon: 'icofont-chart-bar-graph bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(peityRoutes),
    SharedModule
  ],
  declarations: [PeityComponent]
})
export class PeityModule { }
