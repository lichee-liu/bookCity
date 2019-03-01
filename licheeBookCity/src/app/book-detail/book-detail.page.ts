import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Book} from "../books/books.component";
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  book:Book;
  id: string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {

    //this.book.id =  this.routeInfo.snapshot.params["id"];
    this.routeInfo.queryParams.subscribe(params => {
    this.book = JSON.parse(params['book']);
      
  });
  console.log("detail",this.book);
  }

}
