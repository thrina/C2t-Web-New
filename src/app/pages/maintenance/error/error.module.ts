import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ErrorRoutes: Routes = [{
  path: '',
  component: ErrorComponent,
  data: {
    breadcrumb: 'Error Pages',
    icon: 'icofont-listine-dots bg-c-pink',
    status: true
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ErrorRoutes),
    SharedModule
  ],
  declarations: [ErrorComponent]
})
export class ErrorModule { }
