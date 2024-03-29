import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  private _url = window.location.origin + '/user';
  public _user$: BehaviorSubject<[string]>;

  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._user$ = new BehaviorSubject<[string]>(
      currentUser && [currentUser.username, currentUser.firstname, currentUser.role]);
  }

  get user$(): BehaviorSubject<[string]> {
    return this._user$;
  }

  get username(): string {
    return (localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).username : '';
  }

  get token(): string {
    return (localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).token : '';
  }

  get role(): string {
    return (localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).role : '';
  }

  get firstname(): string {
    return (localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).firstname : '';
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/login`,
      { username: username, password: password })
      .map(res => res.json()).map(res => {
        const token = res.token;
        const firstname = res.firstname;
        const role = res.role;
        if (token) {
          localStorage.setItem('currentUser',
            JSON.stringify({ username: username, token: token, firstname: firstname, role: role }));
          this._user$.next([username, token, firstname, role]);
          return true;
        } else {
          return false;
        }
      });
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem('currentUser');
      setTimeout(() => this._user$.next(null));
    }
  }

  register(username: string, password: string, firstname: string, lastname: string,
    address: string, phoneNumber: string, birthday: Number): Observable<boolean> {
    return this.http.post(`${this._url}/register`,
      {
        username: username, password: password, firstname: firstname, lastname: lastname,
        address: address, phoneNumber: phoneNumber, birthday: birthday
      })
      .map(res => res.json()).map(res => {
        const token = res.token;
        firstname = res.firstname;
        const role = res.role;
        if (token) {
          localStorage.setItem('currentUser',
            JSON.stringify({ username: username, token: token, firstname: firstname, role: role }));
          this._user$.next([username, token, firstname, role]);
          return true;
        } else {
          return false;
        }
      });
  }

  checkUserName(username: string): Observable<boolean> {
    return this.http.post(`${this._url}/checkusername`, { username: username }).map(res => res.json())
      .map(item => {
        return item;
      });
  }

}
