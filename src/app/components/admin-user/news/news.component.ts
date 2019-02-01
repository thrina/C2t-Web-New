import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from './news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  rowsBasic: any = [];
  loadingIndicator = true;
  reorderable = true;
  filterQuery = '';
  isAddNews: boolean = false;
  category: any;
  date: any;
  newsTitle: string;
  pnotify: any;
  errorImg: string;

  columns = [
    { name: 'imgUrl' },
    { name: 'Title' },
    { name: 'Date' },
    { name: 'Description' },
    { name: 'Category' },
  ];

  page= {"totalRecords":0,"page":1,"limit":10}

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.setPage({ offset: 0 });
    this.getCategories();
    this.category="all";
    this.errorImg="http://localhost:3000/assets/news_default.jpg";
    setTimeout(() => { this.loadingIndicator = false; }, 1500);
  }

  openAddNews() {
    this.isAddNews = true;
  }

  closeAddNews() {
    this.isAddNews = false;
      this.setPage({offset:0});
  }

  onClick(row) {
    
  }

  onSelect(event) {
    console.log(event,"event");
    
  }

  setPage(pageInfo) {
    this.page.page = parseInt(pageInfo.offset) + 1;
    this.getNews(this.page);
  }

  
  getNews(params) {
    this.newsService.getNews(params).subscribe(data => {
      if (data.status == "success") {
        this.rowsBasic = data.rows;
        this.page.totalRecords= data.totalRecords;
      }
    })
  }

  search() {
    let sarch = { "searchText": this.filterQuery, "page": 1, "limit": 10 };
    this.getNews(sarch);
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
        this.search();
    }
}

  searchCategory() {
    let sarch = { "category": this.category, "page": 1, "limit": 10 };
    this.getNews(sarch);
  }

  dateSearch() {
    let sarch = { "date": this.date, "page": 1, "limit": 10 };
    this.getNews(sarch);
  }
  // deleteEvent(rec: any):void {
  //   this.eventsService.deleteEvent(rec).subscribe(data => {
  //     if (data.status == "success") {
  //       console.log("deleted");
  //       this.setPage({ offset: 0 });
  //       this.eventTitle=JSON.parse(JSON.stringify(rec));
  //       this.pnotify.success({ title:rec.title+ ": delete successfully", delay: 2000 });
  //     }
  //   })
  // }
  deleteNews(rec: any):void {
    this.newsService.deleteNews(rec).subscribe(data => {
      if (data.status == "success") {
        console.log("deleted");
        this.setPage({ offset: 0 });
        this.newsTitle=JSON.parse(JSON.stringify(rec));
        this.pnotify.success({ title:rec.title+ ": delete successfully", delay: 2000 });

      }
    })
  }
  getCategories() {
    this.newsService.getCategories().subscribe(data => {
      
    })
  }
}