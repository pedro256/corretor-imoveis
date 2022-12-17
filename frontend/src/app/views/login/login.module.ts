

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';
import { ConverterService } from 'src/app/services/api/converter.service';
import { AuthService } from 'src/app/services/auth/auth.service';

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
