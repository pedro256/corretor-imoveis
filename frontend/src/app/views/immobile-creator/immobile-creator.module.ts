

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { ImobileCreatorComponent } from './immobile-creator.component';


@NgModule({
  declarations: [
    ImobileCreatorComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule
  ],
  providers: [
  ],
})
export class ImobileCreatorModule { }