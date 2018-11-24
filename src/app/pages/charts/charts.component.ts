import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
