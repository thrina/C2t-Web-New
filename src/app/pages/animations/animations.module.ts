import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {AnimatorModule} from 'css-animator';

export const AnimationsRoutes: Routes = [{
  path: '',
  component: AnimationsComponent,
  data: {
    heading: 'Animations',
    breadcrumb: 'Animations',
    icon: 'icofont-maximize bg-c-yellow'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AnimationsRoutes),
    SharedModule,
    AnimatorModule
  ],
  declarations: [AnimationsComponent]
})
export class AnimationsModule { }
