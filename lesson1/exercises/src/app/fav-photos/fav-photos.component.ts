import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Colors';
  image1 = 'https://d1idmtl6fikohh.cloudfront.net/image/cache/catalog/paint/mayco/fn/mayco_fn013-700x700.jpg';
  image2 = 'https://cdn.shopify.com/s/files/1/0010/0994/2575/products/2066-70-lightblue_0e38026d-498a-45d9-8dcb-5f05f37baa9f_2000x.png?v=1576883959';
  image3 = 'https://i.pinimg.com/236x/88/45/35/8845352059b3f6df722fb0d6a5320f26--blank-cards-build-your-own.jpg';

  constructor() { }

  ngOnInit() {
  }

}