import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ActivityComponent } from './activity/activity.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes = [
  { path: 'list', component: ActivityListComponent },
  { path: 'add', component: AddActivityComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    ActivityListComponent,
    AddActivityComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddActivityComponent,
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
