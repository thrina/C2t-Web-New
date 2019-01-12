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
  advertisementImage: FileList;
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

  fileOverBase(event: any){
    this.advertisementImage = event.target.files;
  }

  // publishNews() {
  //   this.adService.addAdvertisement(this.ads).subscribe(data => {
  //     if (data.status == 'success') {
  //       this.pnotify.success({ text: 'Published successfully', delay: 1000 });
  //       this.cancelAd();
  //     } else {
  //       this.pnotify.error({ text: data.status, delay: 1000 });        
  //     }
  //   })
  // }

  publishAdd() {
    let test = this.ads;
    let formData: FormData = new FormData();
       console.log(test, "advertisement");
        if (this.advertisementImage !== null) {
         Object.keys(test).forEach(function (key) {
           formData.append(key, test[key]);
           console.log(formData);
         });
         formData.append("advertisementImage", this.advertisementImage.item(0));
       }
       if (formData != null) {
         this.adService.addAdvertisement(formData).subscribe(data => {
           if (data.status == 'success') {
             this.pnotify.success({ title: "Advertisement Published successfully", delay: 1000 });
             this.cancelAd();
           } else {
             console.log("form data submitted");
             this.pnotify.error({ title: "Please check the details" + data.status, delay: 1000 });
           }
         })
       } else {
          this.adService.addAdvertisement(this.ads).subscribe(data => {
           if (data.status == 'success') {
             this.pnotify.success({ title: "Portfolio added successfully", delay: 1000 });
             this.cancelAd();
           } else {
             console.log("form advertisement submitted");
             this.pnotify.error({ title: "Please check the details"+data.status, delay: 1000 });
           }
         })
       }   
   }

  cancelAd() {
    this.isDisplayChange.emit();
  }

}
