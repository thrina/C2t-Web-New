import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericClassComponent } from './generic-class.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

export const GenericClassRoutes: Routes = [
  {
    path: '',
    component: GenericClassComponent,
    data: {
      breadcrumb: 'Generic Class',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GenericClassRoutes),
    SharedModule
  ],
  declarations: [GenericClassComponent]
})
export class GenericClassModule { }
