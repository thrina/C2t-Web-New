import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

export const InvoiceRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Invoice',
      status: false
    },
    children: [
      {
        path: 'basic',
        loadChildren: './basic-invoice/basic-invoice.module#BasicInvoiceModule'
      }, {
        path: 'summary',
        loadChildren: './summary-invoice/summary-invoice.module#SummaryInvoiceModule'
      }, {
        path: 'list',
        loadChildren: './list-invoice/list-invoice.module#ListInvoiceModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(InvoiceRoutes),
    SharedModule
  ],
  declarations: [InvoiceComponent]
})
export class InvoiceModule { }
