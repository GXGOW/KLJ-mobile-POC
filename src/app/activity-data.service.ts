import { Injectable } from '@angular/core';
import { Activity } from './activity.model';
@Injectable()
export class ActivityDataService {
  private _activities = new Array<Activity>();
  constructor() {
    for (let i = 1; i <= 12; i++) {
      this._activities.push(new Activity('Activiteit ' + i, 'Beschrijving'));
    }
  }

  get activities() {
    return this._activities;
  }

  addNewActivity(activity) {
    this._activities.push(activity);
  }

}
