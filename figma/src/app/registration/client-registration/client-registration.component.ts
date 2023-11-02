import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.scss']
})
export class ClientRegistrationComponent {
  ClientRegistration:FormGroup;
  isSubmitted:boolean = false

  constructor(private fb :FormBuilder){
    this.ClientRegistration = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['',Validators.required]
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

  onSubmit(){
    if (this.ClientRegistration.valid) {
      this.isSubmitted = true
      console.log('successfully registered');
    }
  }
}
