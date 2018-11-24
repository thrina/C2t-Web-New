import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {SqueezeBoxModule} from 'squeezebox';

export const AccordionRoutes: Routes = [
  {
    path: '',
    component: AccordionComponent,
    data: {
      breadcrumb: 'Accordion',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccordionRoutes),
    SharedModule,
    SqueezeBoxModule
  ],
  declarations: [AccordionComponent]
})
export class AccordionModule { }
