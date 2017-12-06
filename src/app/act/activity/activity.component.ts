import { ActivityDetailComponent } from '../activity-detail/activity-detail.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../activity.model';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  @Input() public activity: Activity;
  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
  }

  showDetailDialog() {
    const dialog = this.dialog.open(ActivityDetailComponent, {
      width: '700px',
      data: {
        data: this.activity
      }
    });
  }

}
