import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './components/detail/detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

import { ProductsRoutingModule } from './product-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [DetailComponent, ProductsComponent, ProductComponent],
  imports: [ProductsRoutingModule, CommonModule, SharedModule, MaterialModule],
})
export class ProductModule {}
