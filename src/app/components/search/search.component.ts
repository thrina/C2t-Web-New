import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  rowsBasic: any = [];
  filterQuery = '';

  page= {"totalRecords":0,"page":1,"limit":10}

  constructor(private searchService :SearchService) { }
  // start of init
  ngOnInit() {
    this.setPage({ offset: 0 });
    // getUsers(params) {
    //   this.dashboardService.getUsers(params).subscribe(data => {
    //     console.log(data, "users")
    //     if (data.status == "success") {
    //       for (let x of data.rows) {
    //         x['status'] = "active";
    //       }
    //       this.rowsBasic = data.rows;
    //     }
    //   })
    // }
  }  
  setPage(pageInfo) {
    this.page.page = parseInt(pageInfo.offset) + 1;
    this.getSearch(this.page);
  }
  getSearch(params) {
    this.searchService.getSearch(params).subscribe(data => {
      if (data.status == "success") {
        this.rowsBasic = data.rows;
        this.page.totalRecords= data.totalRecords
      }
    })
  }
  megasearch(){
    let search = { "searchText": this.filterQuery, "page": 1, "limit": 10 };
    this.getSearch(search);
  }
  // end of init
}
