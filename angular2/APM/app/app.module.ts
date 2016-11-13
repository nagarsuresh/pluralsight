import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { ProductDetail }  from './products/product-detail.component';
import { StarComponent }  from './shared/star.component';
import {ProductFilterPipe} from './products/product-filter.pipe'
import {ProductService} from './products/product.service';
import { HttpModule } from '@angular/http'
import { WelcomeComponent} from './home/welcome.component';
import { Routes, RouterModule } from '@angular/router';

import 'rxjs/Rx';



@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
    { path: '', component : WelcomeComponent },
    { path: 'welcome', component : WelcomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetail },
  ])
  ],
  declarations: [AppComponent, ProductListComponent, ProductFilterPipe, StarComponent, WelcomeComponent, ProductDetail],
  bootstrap: [AppComponent],
  providers: [ProductService],
})
export class AppModule {
}
