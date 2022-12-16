

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginPage } from './login.component';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
})
export class LoginModule { }
