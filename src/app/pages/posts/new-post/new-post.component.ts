import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/providers/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  constructor(private router:Router, private route:ActivatedRoute,private postservice: PostsService){}
  postsForm= new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    owner_id: new FormControl(0),
  })


  public cancelForm(): void {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  public savePosts():void{
    if (this.postsForm.valid) {
      this.postservice.postPosts$(this.postsForm.value).subscribe(resp =>{
        this.router.navigate(['../'], {relativeTo: this.route});
      }, error =>{
          console.log(error);
      })
    }  
  }


  }



