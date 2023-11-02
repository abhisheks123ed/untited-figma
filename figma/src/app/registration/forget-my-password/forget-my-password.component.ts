import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-my-password',
  templateUrl: './forget-my-password.component.html',
  styleUrls: ['./forget-my-password.component.scss']
})
export class ForgetMyPasswordComponent {
  forgetPassword:FormGroup;
  isSubmitted:boolean = false

  constructor(private fb :FormBuilder){
    this.forgetPassword = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  sendVerCode(){
    if (this.forgetPassword.valid) {
      this.isSubmitted = true
      console.log('sended a verification code');
    }
  }
}
