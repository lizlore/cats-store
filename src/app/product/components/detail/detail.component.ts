import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from './../../../product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  // product: Product = {
  //   id: '2',
  //   image: '/assets/images/gato2.jpeg',
  //   title: 'Tierno 2',
  //   price: 0,
  //   description: 'bla bla...',
  // };

  product: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      console.log(product);
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'desde angular',
      image: 'assets/images/gato2.jpeg',
      price: 0,
      description: 'nuevo',
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      image: 'assets/images/gato2.jpeg',
      price: 10,
      description: 'edicion',
    };
    this.productsService
      .updateProduct('2', updateProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('222').subscribe((rta) => {
      console.log(rta);
    });
  }
}
