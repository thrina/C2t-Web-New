import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  news: any = {};
  hasBaseDropZoneOver = false;

  public editor;
  public editorConfig = {
    placeholder: 'Enter news content'
  };
  uploader: FileUploader = new FileUploader({
    isHTML5: true
  });

  @Input() isAddNews: any;
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
    console.log(this.news,"news");
    
  }

  cancelAddNews() {
    this.isDisplayChange.emit();
  }

}
