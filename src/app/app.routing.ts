import {Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import {SignupComponent} from './components/signup/signup.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {JoinUsComponent }from './components/join-us/join-us.component'; 


export const AppRoutes: Routes = [
  { 
    path: '',
    component:AppComponent, 
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },{
      path: 'home',
      component: HomeComponent

    },{
      path: 'joinus',
      component: JoinUsComponent

    }]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'c2t/signup',
        pathMatch: 'full'
      },
      {
        path: 'c2t',
        loadChildren: './components/c2t.module#C2TModule'
      }, {
        path: 'user',
        loadChildren: './pages/user/user.module#UserModule'
      }
    ]
  }, {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
      }
    ]
  }
];
