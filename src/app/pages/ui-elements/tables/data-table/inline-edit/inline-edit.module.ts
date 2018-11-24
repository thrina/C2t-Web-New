import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineEditComponent } from './inline-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

export const inlineEditRoutes: Routes = [
  {
    path: '',
    component: InlineEditComponent,
    data: {
      breadcrumb: 'Editable',
      icon: 'icofont-table bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(inlineEditRoutes),
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [InlineEditComponent]
})
export class InlineEditModule { }
