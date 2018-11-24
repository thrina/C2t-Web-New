import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const cardRoutes: Routes = [
  {
    path: '',
    component: CardComponent,
    data: {
      breadcrumb: 'User Card',
      icon: 'icofont-justify-all bg-c-green',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cardRoutes),
    SharedModule
  ],
  declarations: [CardComponent]
})
export class CardModule { }
