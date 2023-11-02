import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-my-password3',
  templateUrl: './forget-my-password3.component.html',
  styleUrls: ['./forget-my-password3.component.scss']
})
export class ForgetMyPassword3Component {
  resetPassword: FormGroup;
   isSubmitted:boolean=false;

  constructor(private fb: FormBuilder) {
    this.resetPassword = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validators :this.MustMatch('password','confirmPassword')
    });
  }
  MustMatch(controlName:string,matchingControlName:string){
    return (formGroup:FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingName = formGroup.controls[matchingControlName];
      
      if(matchingName.errors &&  !matchingName){
        return
      }
      if(control.value !== matchingName.value){
        matchingName.setErrors({MustMatch:true})
      }
      else{
        matchingName.setErrors(null)
      }

    }
  }

  onSubmit() {
    if (this.resetPassword.valid) {
      this.isSubmitted = true
      console.log('success');
    }
  }
}
