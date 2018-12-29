import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
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

  columns = [
    { name: 'Image' },
    { name: 'Title' },
    { name: 'Date' },
    { name: 'Content' },
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
        this.page.totalRecords= data.totalRecords
      }
    })
  }
  
  openAddEvent() {
    this.isAddEvent = true;
  }
    
  deleteEvent(rec: Number):void {
    console.log();
    // if (confirm('Are you sure to delete this record ?') == true) {
    //   this.employeeService.deleteEmployee(id)
    //   .subscribe(x => {
    //     this.employeeService.getEmployeeList();
    //     this.toastr.warning("Deleted Successfully","Employee Register");
    //   })
    // }
  }

  closeAddEvent() {
    this.isAddEvent = false;
    this.setPage({offset:0});
  }

}
