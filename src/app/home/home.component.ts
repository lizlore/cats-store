import { Component, OnInit, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper = new Swiper('');

  constructor() {}

  ngOnInit(): void {}

  // muestra cuando los componentes hijo ya fueron renderizados
  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }
}
