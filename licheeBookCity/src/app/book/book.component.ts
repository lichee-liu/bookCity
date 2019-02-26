import { Component, OnInit } from '@angular/core';
import {BookDetail} from '../book-detail';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  bd :BookDetail;
  constructor() { }

  ngOnInit() {}

}
