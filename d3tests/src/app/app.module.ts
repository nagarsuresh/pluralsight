import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleBarsComponent } from './simple-bars/simple-bars.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleBarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
