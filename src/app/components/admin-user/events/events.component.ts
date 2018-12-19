import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
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

  columns = [
    { name: 'Image' },
    { name: 'Title' },
    { name: 'Date' },
    { name: 'Content' },
    { name: 'Category' },
  ];

  page= {"totalRecords":0,"page":1,"limit":10}
  constructor(private eventsService:EventsService) { }

  ngOnInit() {
    this.setPage({ offset: 0 });
    setTimeout(() => { this.loadingIndicator = false; }, 1500);
  }

  setPage(pageInfo) {
    this.page.page = parseInt(pageInfo.offset) + 1;
    this.getEvents(this.page);
  }

   
  getEvents(params) {
    this.eventsService.getEvents(params).subscribe(data => {
      if (data.status == "success") {
        this.rowsBasic = data.rows;
        this.page.totalRecords= data.totalRecords
      }
    })
  }
  
  openAddEvent() {
    this.isAddEvent = true;
    
  }

  closeAddEvent() {
    this.isAddEvent = false;
    this.setPage({offset:0});
  }

}
