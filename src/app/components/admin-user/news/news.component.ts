import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  rowsBasic: any = [];
  loadingIndicator = true;
  reorderable = true;
  filterQuery = '';
  isAddNews: boolean = false;

  columns = [
    { name: 'Image' },
    { name: 'Title' },
    { name: 'Date' },
    { name: 'Content' },
    { name: 'Category' },
  ];

  constructor() { }

  ngOnInit() {
    this.rowsBasic = [
      {
        "image": "",
        "title": "News title",
        "content": "Talent",
       "category":"Film",
        "date":"23-04-2018"
      },
      {
        "image": "",
        "title": "News title",
        "content": "Talent",
       "category":"Film",
        "date":"23-04-2018"
      },
      {
        "image": "",
        "title": "News title",
        "content": "Talent",
       "category":"Film",
        "date":"23-04-2018"
      },
      {
        "image": "",
        "title": "News title",
        "content": "Talent",
       "category":"Film",
        "date":"23-04-2018"
      },
      {
        "image": "",
        "title": "News title",
        "content": "Talent",
       "category":"Film",
        "date":"23-04-2018"
      }    
    ]
    setTimeout(() => { this.loadingIndicator = false; }, 1500);
  }

  openAddNews() {
    this.isAddNews = true;
    
  }

  closeAddNews() {
    this.isAddNews = false;
  }

  onClick(row) {
    console.log(row,"?");
    
  }

  onSelect(event) {
    console.log(event,"event");
    
  }

}
