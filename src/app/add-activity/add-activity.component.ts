import { ActivityDataService } from './../activity-data.service';
import { Activity } from '../activity.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {
  @Output() public newActivity = new EventEmitter<Activity>();
  private _activity: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddActivityComponent>
    /*private fb: FormBuilder, private _activityDataService: ActivityDataService, private _router: Router*/) { }

  ngOnInit() {
    /* this.activity = this.fb.group({
       title: ['', [Validators.required, Validators.minLength(2)]],
       description: ['', [Validators.required, Validators.minLength(10)]]
     });*/
  }

  onSubmit() {
    // this.newActivity.emit(this._activity);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

