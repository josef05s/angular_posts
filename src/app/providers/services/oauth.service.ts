import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IResponse} from '../utils/response';
import {END_POINTS} from '../utils/end-point';
import {shareReplay, tap} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class OauthService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public authenticate(credentials: any): Observable<IResponse> {
    return this.http.post<IResponse>(END_POINTS.oauth.login, credentials)
      .pipe(tap(this.setSession.bind(this)), shareReplay());
  }

  private setSession(response: any) {
    if (response) {
      const authorizationCode = response && response.access_token || null;
      localStorage.setItem('token', authorizationCode);

    } else {
      this.notAutorized();
    }
  }
  private notAutorized() {
    localStorage.clear();
  }
}