import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Activity } from './activity.model';
@Injectable()
export class ActivityDataService {
  private _appUrl = 'http://localhost:4200/api/activities';
  private _activities = new Array<Activity>();
  constructor(private http: Http) {

  }

  get activities(): Observable<Activity[]> {
    return this.http.get(this._appUrl).map(response =>
      response.json().map(item =>
        new Activity(item.title, item.description))
    );
  }

  addNewActivity(activity) {
    this._activities.push(activity);
  }

}
