import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {
  event: any = {};
  hasBaseDropZoneOver = false;

  public editor;
  public editorConfig = {
    placeholder: 'Enter Event content'
  };
  uploader: FileUploader = new FileUploader({
    isHTML5: true
  });

  @Input() isAddEvent: any;
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

  publishEvent() {
    console.log(this.event,"event");
    
  }

  cancelAddEvent() {
    this.isDisplayChange.emit();
  }

}
