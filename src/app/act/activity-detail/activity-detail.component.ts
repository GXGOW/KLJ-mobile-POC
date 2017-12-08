import { Router } from '@angular/router';
import { ActivityDataService } from '../activity-data.service';
import { Activity } from '../activity.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AuthenticationService } from '../../user/authentication.service';
import { Observable } from 'rxjs/Rx';
declare const jquery: any;
declare const $: any;
declare const Materialize: any;
@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
  providers: [ActivityDataService, AuthenticationService]
})
export class ActivityDetailComponent implements OnInit {
  public activity: Activity;
  constructor( @Inject(MAT_DIALOG_DATA) public input: any, private dialogRef: MatDialogRef<ActivityDetailComponent>,
    private _activityDataService: ActivityDataService, private _authenticationService: AuthenticationService, private router: Router) {
    this.activity = input.data;
  }

  ngOnInit() {
    this.activity.attendees.forEach(element => {
      if (element.username === this._authenticationService.username) {
        $('#attendBtn').removeClass('red');
        $('#attendBtn').addClass('green');
      }
    });
  }

  get authenticated(): Observable<[string]> {
    return this._authenticationService._user$;
  }

  get role(): string {
    return this._authenticationService.role;
  }

  joinActivity() {
    $('#attendBtn').addClass('disabled');
    this._activityDataService.joinActivity(this.activity.id).subscribe(item => {
      $('#attendBtn').removeClass('disabled');
      item ? $('#attendBtn').removeClass('red').addClass('green') : $('#attendBtn').removeClass('green').addClass('red');
    });
  }

  deleteActivity() {
    $('#deleteBtn').addClass('disabled');
    this._activityDataService.removeActivity(this.activity.id).subscribe(item => {
      if (item) {
        location.reload();
      }
    });
  }

  get attendees(): string[] {
    const ret = [];
    this.activity.attendees.forEach(element => {
      ret.push(element.firstname + ' ' + element.lastname);
    });
    return ret;
  }

  close() {
    this.dialogRef.close();
  }

}
