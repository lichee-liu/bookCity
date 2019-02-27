import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  row : any = [];
  books:any = [];
  constructor() { }

  ngOnInit() {
    this.row.push(1,2,3);
    this.books.push({id:1,name:'回到明朝当王爷',imageUrl:"../assets/35300.jpg"});
  }

}
