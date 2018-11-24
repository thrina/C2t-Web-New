import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class AdvanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
