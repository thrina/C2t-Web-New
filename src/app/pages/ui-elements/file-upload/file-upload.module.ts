import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {FileUploadModule} from "ng2-file-upload";

export const FileUploadRoutes: Routes = [{
  path: '',
  component: FileUploadComponent,
  data: {
    breadcrumb: 'File Upload',
    icon: 'icofont-upload-alt bg-c-lite-green'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FileUploadRoutes),
    SharedModule,
    FileUploadModule
  ],
  declarations: [FileUploadComponent]
})
export class FileUploadUIModule { }
