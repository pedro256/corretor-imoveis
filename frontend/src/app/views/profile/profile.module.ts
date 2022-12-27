

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditProfile } from './modals/edit-profile/edit-profile.component';
import { ProfileComponent } from './profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ModalEditProfile
  ],
  imports: [
    FormsModule
  ],
  providers: [
  ],
})
export class ProfileModule { }
