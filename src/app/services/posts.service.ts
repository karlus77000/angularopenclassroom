import { Injectable } from '@angular/core';
import {Post} from '../post';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsSubject = new Subject<Post[]>();

  /*private posts = [
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
  ];*/

  posts : Post[] = [];



  constructor() { 
    this.getPosts();
  }


  emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPostsSubject();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPostsSubject();
  }

  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }


  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPostsSubject();
        }
      );
  }

}
