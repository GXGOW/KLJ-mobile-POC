import { AppRoutingModule } from './routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ActivityComponent } from './act/activity/activity.component';
import { ActivityListComponent } from './act/activity-list/activity-list.component';
import { AddActivityComponent } from './act/add-activity/add-activity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ActivityDetailComponent } from './act/activity-detail/activity-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    ActivityListComponent,
    AddActivityComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    ActivityDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [
    AddActivityComponent,
    LoginComponent,
    RegisterComponent,
    ActivityDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
