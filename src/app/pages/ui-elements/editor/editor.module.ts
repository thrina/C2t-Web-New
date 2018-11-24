import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";

export const EditorRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Editor',
      status: false
    },
    children: [
      {
        path: 'froala',
        loadChildren: './froala-edit/froala-edit.module#FroalaEditModule'
      }, {
        path: 'quill',
        loadChildren: './quill-edit/quill-edit.module#QuillEditModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EditorRoutes),
    SharedModule
  ],
  declarations: [EditorComponent]
})
export class EditorModule { }
