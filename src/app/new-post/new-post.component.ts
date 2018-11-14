import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Post } from '../post';
import {PostsService} from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private postsService : PostsService,
    private router : Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {

    this.postForm = this.formBuilder.group({
      titre : '',
      message: ''
    });
    
  }

  onSubmitForm(){

    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['titre'],
      formValue['message'],
      0,new Date()
    );
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

  

}
