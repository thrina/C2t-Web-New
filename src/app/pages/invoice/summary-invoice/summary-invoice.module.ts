import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryInvoiceComponent } from './summary-invoice.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';

export const summaryRoutes: Routes = [
  {
    path: '',
    component: SummaryInvoiceComponent,
    data: {
      breadcrumb: 'Invoice Summary',
      icon: 'icofont-chart-histogram bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(summaryRoutes),
    SharedModule,
    ChartModule
  ],
  declarations: [SummaryInvoiceComponent]
})
export class SummaryInvoiceModule { }
