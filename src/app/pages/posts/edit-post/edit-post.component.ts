import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/providers/services/post.service';
import Swal from 'sweetalert2';
import { Post } from '../model-post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  constructor(private router:Router, private route:ActivatedRoute, private postsservice:PostsService){}
  public idPost:number=0
  public post = new Post();
  ngOnInit(){
    this.route.params.subscribe(res => {
      this.idPost = parseInt(res['idPost']);
      this.postgetById(this.idPost)
    });
  }
  postsForm= new FormGroup({
    id: new FormControl(0),
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
  })

  public postgetById(id:number):void{
    const byId = this.postsservice.getById$(id).subscribe(resp=>{
       // @ts-ignore
      this.post = resp && resp || {}
      this.patchValuePost(this.post)
      byId.unsubscribe();
    })

  }
  public patchValuePost(post:Post):void{
    this.postsForm.patchValue(post)
  }
  public cancelForm(): void {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  public savePosts():void{
    if (this.postsForm.valid) {
      this.postsservice.update$(this.idPost,this.postsForm.value).subscribe(resp =>{
        Swal.fire(
          'Editado!',
          'Se editó un post.',
          'success'
        )
        this.router.navigate(['../'], {relativeTo: this.route});
      }, error =>{
        Swal.fire(
          'Error!',
          error,
          'error'
        )
      })
    }  
  }
}