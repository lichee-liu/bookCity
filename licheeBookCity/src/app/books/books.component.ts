import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  row : any = [];
  books:Array<Book> = [];
  column :any = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.row.push(1,2,3);

    for(let i = 0 ; i < 20 ;i++){
      this.books.push({id:i.toString(),name:'回到明朝当王爷',imageUrl:"../assets/35300.jpg"});
    }
    
    for(let i =1 ;i < this.books.length/this.row.length + 1;i++){
      this.column.push(i);
    }
    console.log(' this.column',  this.column.length);
    console.log('this.row', this.row.length);
  }
  pressEvent($event){
    console.log('test', 'press');
    this.router.navigate(['/detail']);
  }
}
export interface Book{
  id:string;
  name:string;
  imageUrl:string;
}