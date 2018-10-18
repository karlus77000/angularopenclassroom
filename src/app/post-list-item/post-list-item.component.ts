import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  /*@Input() content: string;

  @Input() title: string;

  @Input() loveIts : number;

  @Input() createdAt : Date;*/

  @Input() post : Post;


  constructor() { }

  ngOnInit() {
  }


  onlove(love : boolean) {
   if(love){
     this.post.loveIts++;
   }else{
     this.post.loveIts--;
   }
  }


}
