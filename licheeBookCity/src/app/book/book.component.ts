import { Component, OnInit } from '@angular/core';
import { BookDetail } from '../book-detail';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  bookDetail :BookDetail;
  constructor() { }

  ngOnInit() {
    this.bookDetail = {id:1,name:"test",imageUrl:"./../assets/35300.jpg"};
  }

}
