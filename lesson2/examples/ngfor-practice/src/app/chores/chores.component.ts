import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   
   chores = [
      {title: "Yesterday's Chores", tasks: ["Empty the trash can", "Replace trash bags"]},
      {title: "Today's Chores", tasks: ["Wash the dishes", "Dry the dishes"]},
      {title: "Tomorrow's Chores", tasks: ["Walk the dog", "Play with the dog"]}
   ]

   constructor() { }

   ngOnInit() {
   }

}
