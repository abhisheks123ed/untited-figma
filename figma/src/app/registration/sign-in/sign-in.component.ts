import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  loginForm: FormGroup;
  loginForm2: FormGroup;
  isSubmitted:boolean=false;

  constructor(private fb: FormBuilder,private formBuilder: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.loginForm2 = this.formBuilder.group({
      newEmail: ['', [Validators.required, Validators.email]]
    });

  }
  user: { email: string, password: string } = { email: '', password: '' };
  newUser: { email: string } = { email: ''};

  submitForm() {
    if (this.loginForm.valid) {
      this.isSubmitted = true
      console.log('Form submitted with data:', this.user);
    }
  }
  submitNewUser(){
    if (this.loginForm2.valid) {
      this.isSubmitted = true
      console.log('Form submitted with new user:', this.newUser);
    }
  }
}
