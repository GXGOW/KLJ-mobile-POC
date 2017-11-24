import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ActivityComponent } from './activity/activity.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    ActivityListComponent,
    AddActivityComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    AddActivityComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
