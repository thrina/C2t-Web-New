import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapTableComponent } from './bootstrap-table.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

export const BootstrapTableRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Bootstrap Tables',
      status: false
    },
    children: [
      {
        path: 'basic',
        loadChildren: './basic-bootstrap/basic-bootstrap.module#BasicBootstrapModule'
      }, {
        path: 'sizing',
        loadChildren: './sizing/sizing.module#SizingModule'
      }, {
        path: 'border',
        loadChildren: './border/border.module#BorderModule'
      }, {
        path: 'styling',
        loadChildren: './styling/styling.module#StylingModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BootstrapTableRoutes),
    SharedModule
  ],
  declarations: [BootstrapTableComponent]
})
export class BootstrapTableModule { }
