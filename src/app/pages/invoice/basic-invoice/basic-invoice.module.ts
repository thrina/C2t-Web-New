import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInvoiceComponent } from './basic-invoice.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const basicRoutes: Routes = [
  {
    path: '',
    component: BasicInvoiceComponent,
    data: {
      breadcrumb: 'Invoice',
      icon: 'icofont-chart-histogram bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(basicRoutes),
    SharedModule
  ],
  declarations: [BasicInvoiceComponent]
})
export class BasicInvoiceModule { }
