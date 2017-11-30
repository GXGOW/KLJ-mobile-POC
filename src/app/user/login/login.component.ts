import { AuthenticationService } from '../authentication.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  public user: FormGroup;
  public error: string;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder, private authService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authService.login(this.user.value.username, this.user.value.password).subscribe(val => {
      if (val) {
        console.log(val);
        this.dialogRef.close();
        location.reload();
      }
    }, err => this.error = err.json().message);
  }

}
