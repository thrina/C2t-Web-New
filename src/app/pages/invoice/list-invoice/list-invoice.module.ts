import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInvoiceComponent } from './list-invoice.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {SqueezeBoxModule} from 'squeezebox';

export const listRoutes: Routes = [
  {
    path: '',
    component: ListInvoiceComponent,
    data: {
      breadcrumb: 'Invoice List',
      icon: 'icofont-chart-histogram bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(listRoutes),
    SharedModule,
    SqueezeBoxModule
  ],
  declarations: [ListInvoiceComponent]
})
export class ListInvoiceModule { }
