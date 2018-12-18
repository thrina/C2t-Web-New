import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {AdvertisementService} from '../advertisement.service';
import { CustomNotifyService } from '../../../shared/custom-notify.service';

@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.css']
})
export class AddAdvertisementComponent implements OnInit {
  ads: any = {};
  hasBaseDropZoneOver = false;
  pnotify: any;

  public editor;
  public editorConfig = {
    placeholder: 'Enter advertisement content'
  };
  uploader: FileUploader = new FileUploader({
    isHTML5: true
  });

  @Input() isAddAdvertisement: any;
  @Output() isDisplayChange = new EventEmitter<boolean>();

  constructor(private adService: AdvertisementService, private notify: CustomNotifyService) { }

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

  publishNews() {
    this.adService.addAdvertisement(this.ads).subscribe(data => {
      if (data.status == 'success') {
        this.pnotify.success({ text: 'Published successfully', delay: 1000 });
        this.cancelAd();
      } else {
        this.pnotify.error({ text: data.status, delay: 1000 });        
      }
    })
  }

  cancelAd() {
    this.isDisplayChange.emit();
  }

}
