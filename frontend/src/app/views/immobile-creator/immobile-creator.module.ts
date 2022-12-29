

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ComponentsModule } from 'src/app/components/components.module';
import { ImobileCreatorComponent } from './immobile-creator.component';


@NgModule({
  declarations: [
    ImobileCreatorComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    CurrencyMaskModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
})
export class ImobileCreatorModule { }