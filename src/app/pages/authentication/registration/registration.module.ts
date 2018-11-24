import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { WithBgImageComponent } from './with-bg-image/with-bg-image.component';
import { WithHeaderFooterComponent } from './with-header-footer/with-header-footer.component';
import { WithSocialComponent } from './with-social/with-social.component';
import { WithSocialHeaderFooterComponent } from './with-social-header-footer/with-social-header-footer.component';
import { MultiStepComponent } from './multi-step/multi-step.component';
import {SharedModule} from '../../../shared/shared.module';
import {FormWizardModule} from 'angular2-wizard';

export const RegistrationRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Registration'
    },
    children: [
      {
        path: 'with-bg-image',
        component: WithBgImageComponent,
        data: {
          breadcrumb: 'Registration'
        }
      }, {
        path: 'with-header-footer',
        component: WithHeaderFooterComponent,
        data: {
          breadcrumb: 'Registration'
        }
      }, {
        path: 'with-social',
        component: WithSocialComponent,
        data: {
          breadcrumb: 'Registration'
        }
      }, {
        path: 'with-social-header-footer',
        component: WithSocialHeaderFooterComponent,
        data: {
          breadcrumb: 'Registration'
        }
      }, {
        path: 'multi-step',
        component: MultiStepComponent,
        data: {
          breadcrumb: 'Registration'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RegistrationRoutes),
    SharedModule,
    FormWizardModule
  ],
  declarations: [WithBgImageComponent, WithHeaderFooterComponent, WithSocialComponent, WithSocialHeaderFooterComponent, MultiStepComponent]
})
export class RegistrationModule { }
