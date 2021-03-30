import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  // products: Product[] = [
  //   {
  //     id: '1',
  //     image: '/assets/images/gato1.jpeg',
  //     title: 'Tierno',
  //     price: 0,
  //     description: 'bla bla...',
  //   },
  //   {
  //     id: '2',
  //     image: '/assets/images/gato2.jpeg',
  //     title: 'Tierno 2',
  //     price: 0,
  //     description: 'bla bla...',
  //   },
  //   {
  //     id: '3',
  //     image: '/assets/images/gato3.jpeg',
  //     title: 'Tierno 3',
  //     price: 0,
  //     description: 'bla bla...',
  //   },
  //   {
  //     id: '4',
  //     image: '/assets/images/gato4.jpeg',
  //     title: 'Tierno 4',
  //     price: 0,
  //     description: 'bla bla...',
  //   },
  //   {
  //     id: '5',
  //     image: '/assets/images/gato5.webp',
  //     title: 'Tierno 5',
  //     price: 0,
  //     description: 'bla bla...',
  //   },
  // ];

  clickProduct(id: number) {
    console.log('product: ');
    console.log(id);
  }

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }
}
