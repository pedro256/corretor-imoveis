

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardPostComponent } from './card-post/card-post.component';


@NgModule({
  declarations: [
    CardPostComponent
  ],
  exports:[
    CardPostComponent
  ],
})
export class ComponentsModule { }
