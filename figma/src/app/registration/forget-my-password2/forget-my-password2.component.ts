import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-my-password2',
  templateUrl: './forget-my-password2.component.html',
  styleUrls: ['./forget-my-password2.component.scss']
})
export class ForgetMyPassword2Component {
  forgetPassword2:FormGroup;
  isSubmitted:boolean = false

  constructor(private fb :FormBuilder){
    this.forgetPassword2 = this.fb.group({
      verCode: ['', [Validators.required]]
    });
  }

  sendVerCode(){
    if (this.forgetPassword2.valid) {
      this.isSubmitted = true
      console.log('succcess');
    }
  }
}
