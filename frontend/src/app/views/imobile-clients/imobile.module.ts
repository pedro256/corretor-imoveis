

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { ImobileComponent } from './imobile.component';


@NgModule({
  declarations: [
    ImobileComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule
  ],
  providers: [
  ],
})
export class ImobileModule { }