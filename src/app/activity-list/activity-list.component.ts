import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity.model';
@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  private _activities = new Array<Activity>();
  constructor() {
    for (let i = 0; i < 11; i++) {
      this._activities.push(new Activity('Activiteit ' + 1, 'Beschrijving'));
    }
  }

  ngOnInit() {

  }

  get activities() {
    return this._activities;
  }

}
