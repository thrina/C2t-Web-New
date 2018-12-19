import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from './advertisement.service';

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
  page= {"totalRecords":0,"page":1,"limit":10}

  constructor(private adService:AdvertisementService) { }

  ngOnInit() {
    this.setPage({offset:0});
    setTimeout(() => { this.loadingIndicator = false; }, 1500);
  }

  getAds(params) {
    this.adService.getAdvertisements(params).subscribe(data => {
      if (data.status == "success") {
        this.rowsBasic = data.rows;
        this.page.totalRecords= data.totalRecords
      }
    })
  }

  openAddAds() {
    this.isAddAdvertisement = true;
  }

  setPage(pageInfo) {
    this.page.page = parseInt(pageInfo.offset) + 1;
    this.getAds(this.page);
  }

  closeAddAds() {
    this.isAddAdvertisement = false;
    this.setPage({offset:0});
  }

}
