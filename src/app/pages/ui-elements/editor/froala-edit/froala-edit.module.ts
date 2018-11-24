import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FroalaEditComponent } from './froala-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {FormsModule} from '@angular/forms';

export const froalaRoutes: Routes = [
  {
    path: '',
    component: FroalaEditComponent,
    data: {
      breadcrumb: 'Froala WYSIWYG Editor',
      icon: 'icofont-edit bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(froalaRoutes),
    SharedModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [FroalaEditComponent]
})
export class FroalaEditModule { }
