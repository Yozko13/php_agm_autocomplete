import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import '@angular/compiler';

import { MarkersService } from './markers.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'Your app key',
      libraries: ['places']
    }),
    GooglePlaceModule,
    HttpClientModule
  ],
  providers: [MarkersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
