

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api/api.service';
import { ConverterService } from './api/converter.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AuthService,
    ApiService,
    ConverterService
  ],
})
export class ServiceModule { }
