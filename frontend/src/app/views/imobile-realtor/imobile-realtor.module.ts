

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ImobileRealtorComponent } from './imobile-realtor.component';
import { ModalAprovarItemImmobile } from './modal/aprovar/aprovar.component';
import { ModalEditItemImmobile } from './modal/edit-item/edit-item.component';


@NgModule({
  declarations: [
    ImobileRealtorComponent,
    ModalEditItemImmobile,
    ModalAprovarItemImmobile
  ],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyMaskModule
  ],
  providers: [
  ],
})
export class ImobileRealtorModule { }