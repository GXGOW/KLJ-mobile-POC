import { Observable } from 'rxjs/Rx';
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
  public activities: Activity[];
  constructor(private userDataService: UserDataService, private activityDataService: ActivityDataService) {
    this.userDataService.userDetails.subscribe(item => this.user = item);
    this.activityDataService.attendedActivities.subscribe(item => this.activities = item);
  }

  ngOnInit() {
  }

}
