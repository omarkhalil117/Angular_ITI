import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { confirmPasswordValidator, spaceCheckValidator } from '../validators/confirm-password.validator';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup(
      {
        // userName Validations
        userName: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          spaceCheckValidator
        ]),

        // userMail Validations
        userMail: new FormControl('', [Validators.email, Validators.required]),

        // password Validations
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(
            /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9]).{1,8}$/
          ),
        ]),

        // confirm password Validations
        confirm: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(
            /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9]).{1,8}$/
          ),
        ]),
      },
      // check equality validator
      confirmPasswordValidator
    );
  }

  // Test submit btn
  submitForm() {
    console.log('Submitted');
    console.log(this.registerForm);
  }
}
