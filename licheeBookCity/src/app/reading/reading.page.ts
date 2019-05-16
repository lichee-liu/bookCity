import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Book} from "../books/books.component";
import { AndroidFullScreen }from '@ionic-native/android-full-screen/ngx';
@Component({
  selector: 'app-reading',
  templateUrl: './reading.page.html',
  styleUrls: ['./reading.page.scss'],
})
export class ReadingPage implements OnInit {
  book:Book;
  onclickScreen:boolean  = false ;
  constructor(private androidFullScreen: AndroidFullScreen,private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routeInfo.queryParams.subscribe(params => {
      this.book = JSON.parse(params['book']);
    });
    console.log("detail",this.book);
    this.androidFullScreen.isImmersiveModeSupported()
    .then(() => this.androidFullScreen.immersiveMode())
    .catch(err => console.log(err));
  }
  up():void{
    this.onclickScreen = false;
  }
  down():void {
    this.onclickScreen = false;
  }
  showMenu($event,id) : void {
    this.onclickScreen = !this.onclickScreen ;
  }

}
