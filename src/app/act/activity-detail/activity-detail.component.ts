import { ActivityDataService } from '../activity-data.service';
import { Activity } from '../activity.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AuthenticationService } from '../../user/authentication.service';
declare const jquery: any;
declare const $: any;
@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
  providers: [ActivityDataService, AuthenticationService]
})
export class ActivityDetailComponent implements OnInit {
  public activity: Activity;
  constructor( @Inject(MAT_DIALOG_DATA) public input: any, private dialogRef: MatDialogRef<ActivityDetailComponent>,
    private _activityDataService: ActivityDataService) {
    this.activity = input.data;
  }

  joinActivity() {
    $('#attendBtn').addClass('disabled');
    this._activityDataService.joinActivity(this.activity.id).subscribe(item => {
      $('#attendBtn').removeClass('disabled');
      item ? $('#attendBtn').removeClass('red').addClass('green') : $('#attendBtn').removeClass('green').addClass('red');
    });
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
