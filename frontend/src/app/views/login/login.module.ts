

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [
  ],
})
export class LoginModule { }
