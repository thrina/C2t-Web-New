import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {
  rowsBasic: any = [];
  loadingIndicator = true;
  reorderable = true;
  filterQuery = '';
  isAddAdvertisement: boolean = false;

  columns = [
    { name: 'Image' },
    { name: 'Title' },
    { name: 'Date' },
    { name: 'Content' },
    { name: 'Category' },
    { name: 'Applications' }
  ];

  constructor() { }

  ngOnInit() {
    this.rowsBasic = [
      {
        "image": "",
        "title": "News title",
        "content": "Talent",
       "category":"Film",
        "date": "23-04-2018",
        "applications": "7"
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

  openAddAds() {
    this.isAddAdvertisement = true;
    
  }

  closeAddAds() {
    this.isAddAdvertisement = false;
  }

}
