import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product: Product = {
    id: '1',
    image: '/assets/images/gato1.jpeg',
    title: 'Tierno',
    price: 0,
    description: 'bla bla...',
  }; // Recibir una propiedad desde otro componente
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}
