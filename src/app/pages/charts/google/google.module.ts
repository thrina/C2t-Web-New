import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleComponent } from './google.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';

export const googleRoutes: Routes = [
  {
    path: '',
    component: GoogleComponent,
    data: {
      breadcrumb: 'Google Chart',
      icon: 'icofont-chart-bar-graph bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(googleRoutes),
    SharedModule,
    Ng2GoogleChartsModule
  ],
  declarations: [GoogleComponent]
})
export class GoogleModule { }
