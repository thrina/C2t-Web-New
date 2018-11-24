import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

export const UserRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'User Profile',
      status: false
    },
    children: [
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
      }, {
        path: 'card',
        loadChildren: './card/card.module#CardModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    SharedModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
