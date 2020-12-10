import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = [];

   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle: string) {
      if (!this.movies.includes(newTitle) && newTitle.length > 0) {
         this.movies.push(newTitle);
      }
   }
}