import { ActivityDataService } from './../activity-data.service';
import { Activity } from '../activity.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { MatDialog, MatDialogRef } from '@angular/material';
declare const jquery: any;
declare const $: any;
@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss'],
  providers: [ActivityDataService]
})
export class AddActivityComponent implements OnInit {
  @Output() public newActivity = new EventEmitter<Activity>();
  private activity: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddActivityComponent>,
    private fb: FormBuilder, private _activityDataService: ActivityDataService) { }

  ngOnInit() {
    this.activity = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', [Validators.required]],
      time: ['']
    });
    // Parent variable
    const par = this;
    // Initialize materialize datepicker
    console.log(this.activity);
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 5,
      today: 'Vandaag',
      clear: 'Verwijder',
      close: 'Ok',
      closeOnSelect: false,
      onSet: function (selectedDate) {
        if (selectedDate) {
          par.activity.patchValue({ date: new Date(selectedDate.select).toLocaleDateString('nl-BE') });
        }
      }
    });

    // Initialize materialize timepicker
    $('.timepicker').pickatime({
      default: 'now',
      fromnow: 0,
      twelvehour: false,
      donetext: 'OK',
      cleartext: 'Verwijder',
      canceltext: 'Annuleer',
      autoclose: false
    });


  }

  onSubmit() {
    this.activity.patchValue({ time: $('#time').val() });
    const act = new Activity(this.activity.value.title, this.activity.value.description,
      this.activity.value.date, this.activity.value.time);
    this._activityDataService.addNewActivity(act).subscribe();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

