import { Injectable } from '@angular/core';
import { Product } from './../../../product.model';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
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

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    // propio de TS donde se especifica que se le envia una parte del objeto para su actualizacion
    return this.http.put(`${environment.url_api}/products/${id}`, { changes });
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
