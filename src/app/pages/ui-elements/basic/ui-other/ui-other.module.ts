import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiOtherComponent } from './ui-other.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {PaginationModule} from 'ngx-bootstrap/pagination';

export const OtherRoutes: Routes = [
  {
    path: '',
    component: UiOtherComponent,
    data: {
      breadcrumb: 'Other',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OtherRoutes),
    SharedModule,
    PaginationModule.forRoot()
  ],
  declarations: [UiOtherComponent]
})
export class UiOtherModule { }
