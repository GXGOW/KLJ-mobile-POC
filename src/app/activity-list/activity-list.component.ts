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
  private _activities: Activity[];
  constructor(private _activityDataService: ActivityDataService) {
    this._activities = this._activityDataService.activities;
  }

  ngOnInit() {

  }

  get activities() {
    return this._activities;
  }
  newActivityAdded(activity) {
    this._activityDataService.addNewActivity(activity);
  }

}
