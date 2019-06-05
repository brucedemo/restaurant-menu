import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppService} from './app.service'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
  
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
