import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
