import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizingComponent } from './sizing.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../../../shared/shared.module";

export const sizingRoutes: Routes = [
  {
    path: '',
    component: SizingComponent,
    data: {
      breadcrumb: 'Sizing Table',
      icon: 'icofont-table bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sizingRoutes),
    SharedModule
  ],
  declarations: [SizingComponent]
})
export class SizingModule { }
