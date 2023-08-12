import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EntityDataService} from '../utils/entity-data.service';
import {END_POINTS} from "../utils/end-point";
import {IResponse} from "../utils/response";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService extends EntityDataService<IResponse> {
  constructor(protected override httpClient: HttpClient) {
    super(httpClient, END_POINTS.app.posts);
  }
  public getPostsAll$(): Observable<IResponse> {
    return this.httpClient.get<IResponse>(`${this.endPoint}/`);
  }
  public postPosts$(entity: any): Observable<IResponse> {
    return this.httpClient.post<IResponse>(`${this.endPoint}/`, entity);
  }
}