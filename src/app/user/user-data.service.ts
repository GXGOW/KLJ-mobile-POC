import { User } from './user.model';
import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from './authentication.service';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {
  private _appUrl = window.location.origin + '/user';
  constructor(private http: Http, private auth: AuthenticationService) { }

  get userDetails(): Observable<User> {
    return this.http.get(`${this._appUrl}/getByUsername`,
      {
        headers: new Headers({
          username: this.auth.username, Authorization: `Bearer ${this.auth.token}`
        })
      })
      .map(response => response.json()).map(item => User.fromJSON(item));
  }

}
