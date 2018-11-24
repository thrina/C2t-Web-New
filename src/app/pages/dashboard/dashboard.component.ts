import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
