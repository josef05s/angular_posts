import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorsModule } from './providers/interceptors/interceptors.module';
import { NewPostComponent } from './pages/posts/new-post/new-post.component';
import { EditPostComponent } from './pages/posts/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    NotfoundComponent,
    NewPostComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule, 
    ReactiveFormsModule,
    InterceptorsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
