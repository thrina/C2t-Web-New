import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        data: {
          breadcrumb: 'Login'
        }
      },
      {
        path: 'registration',
        loadChildren: './registration/registration.module#RegistrationModule',
        data: {
          breadcrumb: 'Registration'
        }
      }, {
        path: 'forgot',
        loadChildren: './forgot/forgot.module#ForgotModule'
      }, {
        path: 'lock-screen',
        loadChildren: './lock-screen/lock-screen.module#LockScreenModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class AuthenticationModule { }
