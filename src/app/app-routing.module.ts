import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NewPostComponent } from './pages/posts/new-post/new-post.component';
import { EditPostComponent } from './pages/posts/edit-post/edit-post.component';

const routes: Routes = [
  {
    path:'posts', component: PostsComponent},
   { path:'posts/new', component:NewPostComponent},
   { path:'posts/edit', component:EditPostComponent},
   { path:'login', component: LoginComponent},
    {path:'', redirectTo:'/login', pathMatch:'full'},
    { path:'**', component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
