import { AuthenticationService } from '../authentication.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import * as moment from 'moment';
declare const jquery: any;
declare const $: any;

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}

function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? { 'passwordTooShort': { requiredLength: length, actualLength: control.value.length } } : null;
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthenticationService]
})
export class RegisterComponent implements OnInit {
  public user: FormGroup;

  get passwordControl(): FormControl {
    return <FormControl>this.user.get('passwordGroup').get('password');
  }

  constructor(public dialogRef: MatDialogRef<RegisterComponent>, private authService: AuthenticationService, private fb: FormBuilder) { }

  ngOnInit() {
    // TODO SSV username
    this.user = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, passwordValidator(12)]],
        confirmPassword: ['', Validators.required]
      }, { validator: comparePasswords }),
      firstname: [''],
      lastname: [''],
      street: ['', Validators.required],
      number: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      birthday: ['', Validators.required]
    });

    // Parent variable
    const par = this;
    // Initialize materialize datepicker
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 5,
      today: 'Vandaag',
      clear: 'Verwijder',
      close: 'Ok',
      closeOnSelect: false,
      onSet: function (selectedDate) {
        if (selectedDate) {
          par.user.patchValue({ birthday: new Date(selectedDate.select).toLocaleDateString('nl-BE') });
        }
      }
    });
  }

  onSubmit() {
    return 0;
  }

  close(): void {
    this.dialogRef.close();
  }

}
