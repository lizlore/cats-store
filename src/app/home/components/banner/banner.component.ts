import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/banner/adopt.jpg',
    'assets/banner/articles.jpg',
    'assets/banner/cat-dog.jpeg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
