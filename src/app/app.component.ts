import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagerService } from './services/pagging-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  allItems;
     // pager object
     pager: any = {};
     
         // paged items
         pagedItems: any[];

  constructor(private http: HttpClient, private pagerService: PagerService) {

  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    console.log("pager object", this.pager);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log("paged items", this.pagedItems);
}

  ngOnInit() {
    this.http.get('http://localhost:4200/assets/dummy-data.json')
    .subscribe((data) => {
      this.allItems = data;
      //initialize to page 1
      this.setPage(1);
    });
  }


}