import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeLogComponent } from './change-log.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

export const ChangeLogRoutes: Routes = [{
  path: '',
  component: ChangeLogComponent,
  data: {
    breadcrumb: 'Change Log',
    icon: 'icofont-social-blogger bg-c-green'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChangeLogRoutes),
    SharedModule,
    ScrollToModule.forRoot()
  ],
  declarations: [ChangeLogComponent]
})
export class ChangeLogModule { }
