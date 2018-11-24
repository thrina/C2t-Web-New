import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { C2TComponent } from './c2t.component';
import {SignupComponent} from './signup/signup.component';
import {SharedModule} from '../shared/shared.module';

export const c2tRoutes: Routes = [
  {
    path: '',
    component: C2TComponent,
    children: [
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(c2tRoutes),
    SharedModule
  ],
  declarations: [C2TComponent,SignupComponent]
})
export class C2TModule { }
