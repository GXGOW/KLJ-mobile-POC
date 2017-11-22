import { Component, OnInit } from '@angular/core';
import { Activity } from './activity.model';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  public activity: Activity;
  constructor() {
    this.activity = new Activity('Test', 'Een beschrijving');
  }

  ngOnInit() {
  }

}
