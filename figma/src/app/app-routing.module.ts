import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './registration/sign-in/sign-in.component';
import { ForgetMyPasswordComponent } from './registration/forget-my-password/forget-my-password.component';
import { ForgetMyPassword2Component } from './registration/forget-my-password2/forget-my-password2.component';
import { ForgetMyPassword3Component } from './registration/forget-my-password3/forget-my-password3.component';
import { CodeVerificationComponent } from './registration/code-verification/code-verification.component';
import { ClientRegistrationComponent } from './registration/client-registration/client-registration.component';

const routes: Routes = [
  {
    path:"",
    component:SignInComponent
  },
  {
    path:"ForgetPasword",
    component:ForgetMyPasswordComponent
  },
  {
    path:"ForgetPasword2",
    component:ForgetMyPassword2Component
  },
  {
    path:"ForgetPasword3",
    component:ForgetMyPassword3Component
  },
  {
    path:"CodeVerification",
    component:CodeVerificationComponent
  },
  {
    path:"ClientReg",
    component:ClientRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
