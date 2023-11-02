import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './registration/sign-in/sign-in.component';
import { ForgetMyPasswordComponent } from './registration/forget-my-password/forget-my-password.component';
import { ForgetMyPassword2Component } from './registration/forget-my-password2/forget-my-password2.component';
import { CodeVerificationComponent } from './registration/code-verification/code-verification.component';
import { ClientRegistrationComponent } from './registration/client-registration/client-registration.component';
import { ForgetMyPassword3Component } from './registration/forget-my-password3/forget-my-password3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materialModule';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ForgetMyPasswordComponent,
    ForgetMyPassword2Component,
    CodeVerificationComponent,
    ClientRegistrationComponent,
    ForgetMyPassword3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
