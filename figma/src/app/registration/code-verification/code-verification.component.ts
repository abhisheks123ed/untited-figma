import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-code-verification',
  templateUrl: './code-verification.component.html',
  styleUrls: ['./code-verification.component.scss']
})
export class CodeVerificationComponent {
  codeVerification:FormGroup;
  isSubmitted:boolean = false

  constructor(private fb :FormBuilder){
    this.codeVerification = this.fb.group({
      code: ['', [Validators.required]]
    });
  }

  sendVerCode(){
    if (this.codeVerification.valid) {
      this.isSubmitted = true
      console.log('success');
    }
  }
  resendCode(){
    
  }
}
