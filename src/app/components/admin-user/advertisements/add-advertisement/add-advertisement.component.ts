import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.css']
})
export class AddAdvertisementComponent implements OnInit {
  ads: any = {};
  hasBaseDropZoneOver = false;

  public editor;
  public editorConfig = {
    placeholder: 'Enter advertisement content'
  };
  uploader: FileUploader = new FileUploader({
    isHTML5: true
  });

  @Input() isAddAdvertisement: any;
  @Output() isDisplayChange = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  onEditorBlured(quill) {
  }

  onEditorFocused(quill) {
  }

  onEditorCreated(quill) {
    this.editor = quill;
  }

  onContentChanged({ quill, html, text }) {
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  publishNews() {
    console.log(this.ads,"ads");
    
  }

  cancelAddNews() {
    this.isDisplayChange.emit();
  }

}
