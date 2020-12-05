import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  link1 = "https://youtube.com";
  link2 = "https://google.com";
  link3 = "https://old.reddit.com";
  link4 = "https://facebook.com";
  constructor() { }

  ngOnInit() {
  }

}
