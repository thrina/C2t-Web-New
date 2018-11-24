import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylingComponent } from './styling.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';

export const stylingRoutes: Routes = [
  {
    path: '',
    component: StylingComponent,
    data: {
      breadcrumb: 'Styling Table',
      icon: 'icofont-table bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(stylingRoutes),
    SharedModule
  ],
  declarations: [StylingComponent]
})
export class StylingModule { }
