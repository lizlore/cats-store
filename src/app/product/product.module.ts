import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './components/detail/detail.component';
import { ProductsComponent } from './components/products/products.component';

import { ProductsRoutingModule } from './product-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [DetailComponent, ProductsComponent],
  imports: [ProductsRoutingModule, CommonModule, SharedModule],
})
export class HomeModule {}
