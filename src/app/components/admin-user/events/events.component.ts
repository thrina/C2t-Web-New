import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  loadingIndicator = true;
  reorderable = true;
  filterQuery = '';
  rowsBasic: any = [];

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

}
