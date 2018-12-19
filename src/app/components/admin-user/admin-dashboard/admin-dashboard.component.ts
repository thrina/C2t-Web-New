import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from './admin-dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  rowsBasic: any = [];
  loadingIndicator = true;
  reorderable = true;
  filterQuery = '';
  usersCount: any = {};
  statusCount: any = {};
  advertismentsCount: any;
  eventsCount: any;
  newsCount: any;
  columns = [
    { name: 'Name' },
    { name: 'Date' },
    { name: 'Email' },
    { name: 'Mobile' },
    { name: 'Role' },
    { name: 'Email verified' },
    { name: 'Status' },
  ];

  page= {"totalRecords":0,"page":1,"limit":10}

  constructor(private dashboardService: AdminDashboardService) { }

  ngOnInit() {
    this.setPage({ offset: 0 });
    setTimeout(() => { this.loadingIndicator = false; }, 1500);
  }

  setPage(pageInfo) {
    this.page.page = parseInt(pageInfo.offset) + 1;
    this.getUsers(this.page);
    this.getCount();
  }

  getCount() {
    this.dashboardService.getDashboardCount().subscribe(data => {
      console.log(data, "counts");
      if (data.status == "success") {
        this.usersCount = data.usersCount;
        this.statusCount = data.statusCount;
        this.advertismentsCount = data.advertismentsCount;
        this.eventsCount = data.eventsCount;
        this.newsCount = data.newsCount;
      }
     
   })
  }

  getUsers(params) {
    this.dashboardService.getUsers(params).subscribe(data => {
      console.log(data, "users")
      if (data.status == "success") {
        for (let x of data.rows) {
          x['status'] = "active";
        }
        this.rowsBasic = data.rows;
      }
    })
  }

  onSelect(event) {
    console.log(event,"event");
    
  }

  onChange(event) {
    console.log(event, "switch");
  }

}
