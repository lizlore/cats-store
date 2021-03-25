import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'platzi-store';
  items = ['lore', 'mathias', 'vania'];

  products: Product[] = [
    {
      id: '1',
      image: '/assets/images/gato1.jpeg',
      title: 'Tierno',
      price: 0,
      description: 'bla bla...',
    },
    {
      id: '2',
      image: '/assets/images/gato2.jpeg',
      title: 'Tierno 2',
      price: 0,
      description: 'bla bla...',
    },
    {
      id: '3',
      image: '/assets/images/gato3.jpeg',
      title: 'Tierno 3',
      price: 0,
      description: 'bla bla...',
    },
    {
      id: '4',
      image: '/assets/images/gato4.jpeg',
      title: 'Tierno 4',
      price: 0,
      description: 'bla bla...',
    },
    {
      id: '5',
      image: '/assets/images/gato5.webp',
      title: 'Tierno 5',
      price: 0,
      description: 'bla bla...',
    },
  ];

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
