import { LogoutComponent } from './user/logout/logout.component';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddActivityComponent } from './act/add-activity/add-activity.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthenticationService } from './user/authentication.service';
declare const jquery: any;
declare const $: any;
declare const Materialize: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthenticationService]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthenticationService, public dialog: MatDialog) {
  }

  ngOnInit() {
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      hover: true,
      gutter: 0,
      belowOrigin: false,
      alignment: 'left',
      stopPropagation: false
    });
    window.setTimeout(function () { $('#addBtn').removeClass('scale-out'); }, 1000);
    if (!sessionStorage.getItem('dialogShown')) {
      (this.authService._user$.subscribe(item => {
        if (item) {
          Materialize.toast('Welkom terug, ' + this.authService.firstname + '!', 4000);
          sessionStorage.setItem('dialogShown', JSON.stringify(true));
        }
      }));
    }
  }

  get currentUser(): Observable<[string]> {
    return this.authService.user$;
  }

  get firstname(): string {
    return this.authService.firstname;
  }

  get role(): string {
    return this.authService.role;
  }

  addActivityDialog(): void {
    const dialog = this.dialog.open(AddActivityComponent, {
      width: '700px'
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

  logoutDialog(): void {
    const dialog = this.dialog.open(LogoutComponent, {
      width: '700px'
    });
  }


}
