import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ExponentialPipe } from './exponential.pipe';
import { HighlightDirective } from './highlight.directive';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, CartComponent, ExponentialPipe, HighlightDirective, ProductsComponent, ContactComponent, HomeComponent, DemoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
