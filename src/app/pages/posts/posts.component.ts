import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/providers/services/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  data:any;
  constructor(private postsservice:PostsService, private router:Router, private route:ActivatedRoute){}
  ngOnInit(){
    this.getPosts();
  }

  public getPosts(params?: Object): void {
    this.postsservice.getPostsAll$().subscribe(response => {
      this.data = response;
    }, error => {
      console.log(error);
      
    });
  }
  public onDeletePost(idPosts:number):void{
    Swal.fire({
      title: 'Estás seguro de Eliminar?',
      text: "Una vez eliminado, no podrás recuperarlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.postsservice.delete$(idPosts).subscribe(resp => {
          Swal.fire(
            'Eliminado!',
            'Se eliminó un post.',
            'success'
          )
          this.getPosts();
        }, error =>{
          Swal.fire(
            'Error!',
            error.error.detail,
            'error'
          )
        })
        
      }
    })
  }

  public editPost(idPost:number):void{
    this.router.navigate(['edit',{idPost: idPost} ],{relativeTo:this.route})

  }
}
