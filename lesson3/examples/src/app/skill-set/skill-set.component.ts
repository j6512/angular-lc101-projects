import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'skill-set',
   templateUrl: './skill-set.component.html',
   styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {
   listHeading: string = 'Some Coding Skills I Know';
   skills: string[] = ['Loops', 'Conditionals', 'Functions', 'Classes', 'Modules', 'Git', 'HTML/CSS'];
   alternateColor: string = 'lightcoral';
   bulletType: string = 'a';
   changeColor: boolean = true;
   center: string = 'center';
   lcLightBlue: string = 'lightblue';
   constructor() { }

   ngOnInit() { }

}
