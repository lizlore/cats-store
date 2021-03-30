import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';

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
      this.product = this.productsService.getProduct(id);
    });
  }
}
