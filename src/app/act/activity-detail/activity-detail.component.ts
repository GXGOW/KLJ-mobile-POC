import { Activity } from '../activity.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss']
})
export class ActivityDetailComponent implements OnInit {
  public activity: Activity;
  constructor( @Inject(MAT_DIALOG_DATA) public input: any, private dialogRef: MatDialogRef<ActivityDetailComponent>) {
    this.activity = input.data;
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
