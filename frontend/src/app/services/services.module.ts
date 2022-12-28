

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api/api.service';
import { ConverterService } from './api/converter.service';
import { AuthService } from './auth/auth.service';
import { ImmobileService } from './immobile/immobile.service';
import { UserProfileService } from './user/user-profile.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AuthService,
    ApiService,
    ConverterService,
    UserProfileService,
    ImmobileService
  ],
})
export class ServiceModule { }
