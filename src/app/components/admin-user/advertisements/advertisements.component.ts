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
  advertisementTitle:string;
  pnotify: any;

  columns = [
    { name: 'imgUrl' },
    { name: 'Title' },
    { name: 'Date' },
    { name: 'Content' },
    // { name: 'Category' },
    { name: 'Applications' }
  ];
  page= {"totalRecords":0,"page":1,"limit":10}

  constructor(private advertisementService:AdvertisementService, private adService:AdvertisementService) { }

  ngOnInit() {
    this.setPage({offset:0});
    setTimeout(() => { this.loadingIndicator = false; }, 1500);
  }

  search() {
    let sarch = { "searchText": this.filterQuery, "page": 1, "limit": 10 };
    this.getEvents(sarch);
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
        this.search();
    }
}

  getEvents(params) {
    this.advertisementService.getAdvertisements(params).subscribe(data => {
      if (data.status == "success") {
        this.rowsBasic = data.rows;
        this.page.totalRecords= data.totalRecords
      }
    })
  }

  getAds(params) {
    this.advertisementService.getAdvertisements(params).subscribe(data => {
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
  deleteAdvertisement(rec: any):void {
    this.advertisementService.deleteAdvertisement(rec).subscribe(data => {
      if (data.status == "success") {
        console.log("deleted");
        this.setPage({ offset:0});
        this.advertisementTitle=JSON.parse(JSON.stringify(rec));
        this.pnotify.success({ title:rec.title+ ": delete successfully", delay: 2000 });
      }
    })
  }

}