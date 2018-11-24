import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionComponent } from './selection.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';
import { CellComponent } from './cell/cell.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MultiRowsComponent } from './multi-rows/multi-rows.component';
import { SingleRowComponent } from './single-row/single-row.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

export const selectionRoutes: Routes = [
  {
    path: '',
    component: SelectionComponent,
    data: {
      breadcrumb: 'Selection Table',
      icon: 'icofont-table bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(selectionRoutes),
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [SelectionComponent, CellComponent, CheckboxComponent, MultiRowsComponent, SingleRowComponent]
})
export class SelectionModule { }
