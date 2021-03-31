import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';

import { Product } from './../../../product.model';
import { CartService } from './../../../core/services/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product = {
    id: '1',
    image: '/assets/images/gato1.jpeg',
    title: 'Tierno',
    price: 0,
    description: 'bla bla...',
  }; // Recibir una propiedad desde otro componente
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService) {}

  //   ngOnChanges(changes: SimpleChanges) {
  //     console.log('2.-ngOnChanges');
  //     console.log(changes);
  //   }

  ngOnInit() {
    console.log('3.-ngOnInit');
  }

  ngDoCheck() {
    console.log('4.-ngDoCheck');
  }

  ngOnDestroy() {
    console.log('5.-ngonDestroy');
  }

  addCart() {
    console.log('añadir al carrito');
    this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product.id);
  }
}
