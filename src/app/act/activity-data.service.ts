import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Activity } from './activity.model';
import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from '../user/authentication.service';
@Injectable()
export class ActivityDataService {
  private _appUrl = window.location.origin + '/api';

  constructor(private http: Http, private auth: AuthenticationService) {

  }

  joinActivity(activityId): Observable<Boolean> {
    return this.http.post(`${this._appUrl}/join_activity`, {
      activityId: activityId,
      username: this.auth.username
    }, { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(response => response.json()).map(item => !!item);
  }

  get activities(): Observable<Activity[]> {
    return this.http.get(`${this._appUrl}/activities`)
      .map(response => response.json().map(item => Activity.fromJSON(item)));
  }

  get attendedActivities(): Observable<Activity[]> {
    return this.http.get(`${this._appUrl}/activities_by_user`, {
      headers: new Headers({
        username: this.auth.username, Authorization: `Bearer ${this.auth.token}`
      })
    })
      .map(response => response.json().map(item => Activity.fromJSON(item)));
  }

  addNewActivity(activity): Observable<Boolean> {
    activity.organisedBy = this.auth.username;
    return this.http.post(`${this._appUrl}/add_activity`, activity,
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(res => res.json());
  }

  removeActivity(id): Observable<Boolean> {
    return this.http.delete(`${this._appUrl}/remove_activity`,
      { headers: new Headers({ activityId: id, Authorization: `Bearer ${this.auth.token}` }) })
      .map(res => res.json());
  }


}
