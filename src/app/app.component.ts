import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialog = this.dialog.open(AddActivityComponent, {
      width: '700px'
    });

    dialog.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  loginDialog(): void {
    const dialog = this.dialog.open(LoginComponent, {
      width: '700px'
    });
  }

  registerDialog(): void {
    const dialog = this.dialog.open(RegisterComponent, {
      width: '700px'
    });
  }
}
