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
      } ,{
        path: 'animations',
        loadChildren: './pages/animations/animations.module#AnimationsModule'
      },{
        path: 'charts',
        loadChildren: './pages/charts/charts.module#ChartsModule',
      }, {
        path: 'map',
        loadChildren: './pages/map/map.module#MapModule',
      }, {
        path: 'maintenance/error',
        loadChildren: './pages/maintenance/error/error.module#ErrorModule'
      }, {
        path: 'maintenance/coming-soon',
        loadChildren: './pages/maintenance/coming-soon/coming-soon.module#ComingSoonModule'
      }, {
        path: 'user',
        loadChildren: './pages/user/user.module#UserModule'
      }, {
        path: 'task',
        loadChildren: './pages/task/task.module#TaskModule'
      }, {
        path: 'invoice',
        loadChildren: './pages/invoice/invoice.module#InvoiceModule'
      }, {
        path: 'change-log',
        loadChildren: './pages/change-log/change-log.module#ChangeLogModule'
      }, {
        path: 'simple-page',
        loadChildren: './pages/simple-page/simple-page.module#SimplePageModule'
      }
    ]
  }, {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
      }, {
        path: 'maintenance/offline-ui',
        loadChildren: './pages/maintenance/offline-ui/offline-ui.module#OfflineUiModule'
      }
    ]
  }
];
