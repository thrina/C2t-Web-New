import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardEcommerceComponent } from './dashboard-ecommerce.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const DashboardEcommerceRoutes: Routes = [
  {
    path: '',
    component: DashboardEcommerceComponent,
    data: {
      breadcrumb: 'Ecommerce',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardEcommerceRoutes),
    SharedModule
  ],
  declarations: [DashboardEcommerceComponent]
})
export class DashboardEcommerceModule { }
