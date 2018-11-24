import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-other',
  templateUrl: './ui-other.component.html',
  styleUrls: ['./ui-other.component.css']
})
export class UiOtherComponent implements OnInit {
  public maxSize = 5;
  public bigTotalItems = 175;
  public bigCurrentPage = 1;
  public numPages = 0;

  public totalItems = 64;
  public currentPage = 4;
  public currentPager = 2;
  public smallNumPages = 1;
  public pageAdvance = 1;
  constructor() { }

  ngOnInit() {
  }

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {}

}
