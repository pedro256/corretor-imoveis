import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ApiService } from './services/api/api.service';
import { ServiceModule } from './services/services.module';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    LayoutModule,
    FormsModule,
    ServiceModule,
    HttpClientModule

  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
