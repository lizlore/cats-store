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
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailComponent } from './detail/detail.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    DetailComponent,
    LayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
