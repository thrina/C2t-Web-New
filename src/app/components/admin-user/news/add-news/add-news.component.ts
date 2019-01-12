import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import { NewsService } from '../news.service';
import { CustomNotifyService } from '../../../shared/custom-notify.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  news: any = {};
  hasBaseDropZoneOver = false;
  pnotify: any;
  newsImage: FileList;
  public editor;
  public editorConfig = {
    placeholder: 'Enter news content'
  };
  uploader: FileUploader = new FileUploader({
    isHTML5: true
  });

  @Input() isAddNews: any;
  @Output() isDisplayChange = new EventEmitter<boolean>();

  constructor(private newsService: NewsService,  private notify: CustomNotifyService) { }

  ngOnInit() {
    this.pnotify = this.notify.getPNotify();
    this.news.category="choose";
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
    this.newsImage = event.target.files;
  }

    //publishNews() {
    // console.log(this.news, "news");
    // this.newsService.addNews(this.news).subscribe(data => {
    //   if (data.status == 'success') {
    //     this.pnotify.success({ text: 'Published successfully', delay: 2000 });
    //     this.cancelAddNews();
    //   } else {
    //     this.pnotify.error({ text: "Please check the details", delay: 2000 });        
    //   }
    // })
  publishNews() {
      let test = this.news;
      let formData: FormData = new FormData();
      console.log(test, "news");
       if (this.newsImage !== null) {
        Object.keys(test).forEach(function (key) {
          formData.append(key, test[key]);
          console.log(formData);
        });
        formData.append("newsImage", this.newsImage.item(0));
      }
      if (formData != null) {
        this.newsService.addNews(formData).subscribe(data => {
          if (data.status == 'success') {
            this.pnotify.success({ title: "News Published successfully", delay: 1000 });
            this.cancelAddNews();
          } else {
            console.log("form data submitted");
            this.pnotify.error({ title: "Please check the details" + data.status, delay: 1000 });
          }
        })
      } else {
        this.newsService.addNews(this.news).subscribe(data => {
          if (data.status == 'success') {
            this.pnotify.success({ title: "Portfolio added successfully", delay: 1000 });
            this.cancelAddNews();
          } else {
            console.log("form news submitted");
            this.pnotify.error({ title: "Please check the details"+data.status, delay: 1000 });
          }
        })
      }   
  }

  cancelAddNews() {
    this.isDisplayChange.emit();
  }

}
