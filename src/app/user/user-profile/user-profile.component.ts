import { ActivityDataService } from '../../act/activity-data.service';
import { UserDataService } from '../user-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { Activity } from '../../act/activity.model';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [UserDataService, ActivityDataService]
})
export class UserProfileComponent implements OnInit {
  public user: User;
  private _activities: Activity[];
  constructor(userDataService: UserDataService, activityDataService: ActivityDataService) {
    userDataService.userDetails.subscribe(item => this.user = item);
    activityDataService.attendedActivities.subscribe(item => this._activities = item);
  }

  ngOnInit() {
  }

  get activities(): Activity[] {
    return this._activities;
  }

}
