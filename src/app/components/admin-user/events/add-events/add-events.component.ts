import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import { EventsService } from '../events.service';
import { CustomNotifyService } from '../../../shared/custom-notify.service';


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
  pnotify: any;

  @Input() isAddEvent: any;
  @Output() isDisplayChange = new EventEmitter<boolean>();

  constructor(private eventsService: EventsService,  private notify: CustomNotifyService) { }

  ngOnInit() {
    this.pnotify = this.notify.getPNotify();  
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
    this.eventsService.addEvent(this.event).subscribe(data => {
      if (data.status == 'success') {
        this.pnotify.success({ text: 'Published successfully', delay: 1000 });
        this.cancelAddEvent();
      } else {
        this.pnotify.error({ text: data.status, delay: 1000 });        
      }
    })
  }

  cancelAddEvent() {
    this.isDisplayChange.emit();
  }

}
