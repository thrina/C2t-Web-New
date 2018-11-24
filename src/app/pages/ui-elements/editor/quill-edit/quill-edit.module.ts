import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillEditComponent } from './quill-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {QuillEditorModule} from 'ngx-quill-editor';
import {FormsModule} from '@angular/forms';

export const quillRoutes: Routes = [
  {
    path: '',
    component: QuillEditComponent,
    data: {
      breadcrumb: 'Quill Editor',
      icon: 'icofont-edit bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(quillRoutes),
    SharedModule,
    FormsModule,
    QuillEditorModule
  ],
  declarations: [QuillEditComponent]
})
export class QuillEditModule { }
