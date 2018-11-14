import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service'
import {Post} from '../post';
import { Subscription } from 'rxjs';


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
  postsSubscription: Subscription;
  @Input() index: number;
  //posts : Post[];


  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {        
      }
    );
  }


  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

  onDeletePost(){
    this.postsService.removePost(this.post);
  }

  onlove(love : boolean) {
   if(love){
     this.post.loveIts++;
   }else{
     this.post.loveIts--;
   }
   this.postsService.savePosts();
   this.postsService.emitPostsSubject()

  }






}
