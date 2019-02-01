import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
import { CustomNotifyService } from '../../../components/shared/custom-notify.service';
import { stringify } from '@angular/core/src/util';
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
  isAddEvent: boolean = false;
  date: any;
  eventTitle: string;
  pnotify: any;

  columns = [
    { name: 'imgUrl' },
    { name: 'Title' },
    { name: 'Date' },
    { name: 'Content' },
  ];

  page= {"totalRecords":0,"page":1,"limit":10}
  constructor(private eventsService:EventsService, private notify: CustomNotifyService) { }
  ngOnInit() {
    this.setPage({ offset: 0 });
    setTimeout(() => { this.loadingIndicator = false; }, 1500);
    this.pnotify = this.notify.getPNotify();
  }

  setPage(pageInfo) {
    this.page.page = parseInt(pageInfo.offset) + 1;
    this.getEvents(this.page);
  }
  
  search() {
    let sarch = { "searchText": this.filterQuery, "page": 1, "limit": 10 };
    this.getEvents(sarch);
  }
   
  dateSearch() {
    let sarch = { "date": this.date, "page": 1, "limit": 10 };
    this.getEvents(sarch);
  }

  getEvents(params) {
    this.eventsService.getEvents(params).subscribe(data => {
         
      if (data.status == "success") {
        this.rowsBasic = data.rows;
        console.log("this11", this.rowsBasic);
        console.log("this11", this.rowsBasic);
        console.log("this11", this.rowsBasic);
        console.log("this11", this.rowsBasic);

        this.page.totalRecords= data.totalRecords
      }
    })
  }

  openAddEvent() {
    this.isAddEvent = true;
  }
    
  deleteEvent(rec: any):void {
    this.eventsService.deleteEvent(rec).subscribe(data => {
      if (data.status == "success") {
        console.log("deleted");
        this.setPage({ offset:0});
        this.eventTitle=JSON.parse(JSON.stringify(rec));
        this.pnotify.success({ title:rec.title+ ": delete successfully", delay: 2000 });
      }
    })
  }
  closeAddEvent() {
    this.isAddEvent = false;
    this.setPage({offset:0});
  }

}
