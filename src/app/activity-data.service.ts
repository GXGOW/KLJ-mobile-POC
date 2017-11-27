import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Activity } from './activity.model';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class ActivityDataService {
  private _appUrl = window.location.origin + '/api';

  constructor(private http: Http) {

  }

  get activities(): Observable<Activity[]> {
    return this.http.get(`${this._appUrl}/activities`)
      .map(response => response.json().map(item => Activity.fromJSON(item)));
  }

  addNewActivity(activity): Observable<Activity> {
    return this.http.post(`${this._appUrl}/add_activity`, activity)
      .map(res => res.json()).map(item => Activity.fromJSON(item));
  }


}
