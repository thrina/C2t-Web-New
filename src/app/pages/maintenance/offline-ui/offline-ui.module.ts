import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineUiComponent } from './offline-ui.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const OfflineUIRoutes: Routes = [{
  path: '',
  component: OfflineUiComponent,
  data: {
    breadcrumb: 'Offline UI'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OfflineUIRoutes),
    SharedModule
  ],
  declarations: [OfflineUiComponent]
})
export class OfflineUiModule { }
