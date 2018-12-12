import { Component, OnInit } from '@angular/core';

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

  columns = [
    { prop: 'name' },
    { name: 'date' },
    { name: 'email' },
    { prop: 'mobile' },
    { name: 'role' },
    { name: 'status' }
  ];

  constructor() { }

  ngOnInit() {
    this.rowsBasic = [
      {
        "name": "Ethel Price",
        "gender": "female",
        "mobile": "8965999996",
        "role": "Talent",
       "status":"",
        "email": "vijay@gmail.com",
        "date":"23-04-2018"
      },
      {
        "name": "Claudine Neal",
        "gender": "female",
        "mobile": "8965999996",
        "role": "Talent",
       "status":"",
        "email": "vijay@gmail.com",
        "date":"23-04-2018"
      },
      {
        "name": "Beryl Rice",
        "gender": "male",
        "mobile": "8965999996",
        "role": "Talent",
       "status":"",
        "email": "vijay@gmail.com",
        "date":"23-04-2018"
      },
      {
        "name": "Wilder Gonzales",
        "gender": "female",
        "mobile": "8965999996",
        "role": "Talent",
       "status":"",
        "email": "vijay@gmail.com",
        "date":"23-04-2018"
      },
      {
        "name": "Georgina Schultz",
        "gender": "female",
        "mobile": "8965999996",
        "role": "Talent",
       "status":"",
        "email": "vijay@gmail.com",
        "date":"23-04-2018"
      }    
    ]
    setTimeout(() => { this.loadingIndicator = false; }, 1500);
    
  }

}
