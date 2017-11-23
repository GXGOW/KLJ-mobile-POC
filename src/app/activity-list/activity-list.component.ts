import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity.model';
import { ActivityDataService } from '../activity-data.service';
@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
  providers: [ActivityDataService]
})
export class ActivityListComponent implements OnInit {
  private _activities;
  constructor(private _activityDataService: ActivityDataService) {

  }

  ngOnInit() {
    this._activities = this._activityDataService.activities;
  }

  get activities() {
    return this._activities;
  }
  newActivityAdded(activity) {
    this._activityDataService.addNewActivity(activity);
  }

}
