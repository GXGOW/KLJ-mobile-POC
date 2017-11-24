import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddActivityComponent } from './add-activity/add-activity.component';
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
      console.log('The dialog was closed');
    });
  }
}
