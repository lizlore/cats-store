import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { MyValidators } from './../../../utils/custom-validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form: any;

  constructor(
    private FormBuilder: FormBuilder,
    private productsService: ProductsService,
    private Router: Router
  ) {
    this.buildForm();
    // this.form = new FormGroup();
  }

  ngOnInit(): void {}

  saveProduct(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe((newProduct) => {
        console.log(newProduct);
        this.Router.navigate(['./admin/products']); // redirija a la lista de productos una vez creada
      });
    }
  }

  private buildForm() {
    this.form = this.FormBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  /* Getters y Setters nativos de TS y JS */
  get priceField() {
    return this.form.get('price');
  }
}
