import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './coming-soon.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ComingSoonRoutes: Routes = [{
  path: '',
  component: ComingSoonComponent,
  data: {
    breadcrumb: 'Coming Soon',
    icon: 'icofont-listine-dots bg-c-pink',
    status: true
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComingSoonRoutes),
    SharedModule
  ],
  declarations: [ComingSoonComponent]
})
export class ComingSoonModule { }
