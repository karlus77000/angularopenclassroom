import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {PostsService} from '../services/posts.service'
import {Post} from '../post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit , OnDestroy {

  @Input() listPosts ;
  postsSubscription: Subscription;

  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.listPosts = posts;
      }
    );
    this.postsService.emitPostsSubject();
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }


  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
