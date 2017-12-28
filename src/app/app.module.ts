import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { PagerService } from './services/pagging-service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
