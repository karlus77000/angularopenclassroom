import { Component } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'excercice1';


  listPosts = [
    new Post('Mon premier Post',
    'lorem ipsum ...',
    5,
    new Date()),

    new Post('Mon deuxième Post',
      'lorem ipsum 2...',
      -2,
      new Date()),

    new Post('Mon troisieme post',
      'lorem ipsum 3...',
      5,
      new Date())
  ];


}
