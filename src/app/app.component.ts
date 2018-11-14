import { Component, OnInit } from '@angular/core';
import {Post} from './post';
import {PostsService} from './services/posts.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'excercice1';

  listPosts : Post[];


  constructor(){
     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCPgu2M71PtyjG4HQjs7ydqFjbM4LscIFA",
    authDomain: "exo2ocr.firebaseapp.com",
    databaseURL: "https://exo2ocr.firebaseio.com",
    projectId: "exo2ocr",
    storageBucket: "exo2ocr.appspot.com",
    messagingSenderId: "11324757723"
  };
  firebase.initializeApp(config);

  }

  
  ngOnInit() {
      //this.listPosts = this.postsService.;
  }
  


}
