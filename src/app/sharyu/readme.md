-------------------------------------------------------------
ANGULAR COMPONENT - STRUCTURAL DIRECTIVES DEMO
-------------------------------------------------------------

Component Name: SharyuComponent
Technology Used: Angular (HTML, CSS, TypeScript)

-------------------------------------------------------------
DESCRIPTION
-------------------------------------------------------------
This Angular component demonstrates how structural directives 
work in Angular. Directives used in this component:

1. *ngIf          → Shows content based on a condition
2. ngSwitch       → Displays content based on matching conditions
3. *ngFor         → Loops through array and displays data in table
4. ngClass        → Applies CSS class dynamically based on boolean value

-------------------------------------------------------------
FILES INCLUDED
-------------------------------------------------------------
sharyu.component.html
sharyu.component.ts
sharyu.component.css

-------------------------------------------------------------
EXPLANATION OF CODE
-------------------------------------------------------------

1. *ngIf (Conditional Rendering)
-------------------------------
Shows:
    ✅ "Hii I am True 😎"     when condition is TRUE
    ✅ "Hii I am False 🤔"    when condition is FALSE

Code example:
<h1 *ngIf="isBoolean else Sharvari">Hii I am True 😎</h1>
<ng-template #Sharvari>
    <h1>Hii I am False 🤔</h1>
</ng-template>

-------------------------------------------------------------

2. ngSwitch (Multi Conditional Rendering)
-----------------------------------------
Displays a fruit name based on the selected fruit emoji stored 
in 'fruitEmoji' variable.

<div [ngSwitch]="fruitEmoji">
    <h1 *ngSwitchCase="'🍎'">Apple🍎</h1>
    <h1 *ngSwitchCase="'🍍'">PineApple🍍</h1>
    <h1 *ngSwitchCase="'🥭'">Mango🥭</h1>
    <h1 *ngSwitchDefault>Cherry🍒</h1>
</div>

-------------------------------------------------------------

3. *ngFor (Looping)
-------------------
Displays a list of users in a table format.

<tr *ngFor="let item of users">
    <td>{{item.id}}</td>
    <td>{{item.name}}</td>
    <td>{{item.age}}</td>
    <td>{{item.city}}</td>
</tr>

-------------------------------------------------------------

4. ngClass (Dynamic CSS Class)
-------------------------------
Used to toggle text color (red/green) using boolean value.

TypeScript:
isActive=false;
ChangeColor(){
    this.isActive = !this.isActive;
}

CSS Used:
.red {
    color: red;
}
.green {
    color: green;
}

-------------------------------------------------------------
TS FILE (sharyu.component.ts)
-------------------------------------------------------------
import { Component } from '@angular/core';

@Component({
  selector: 'app-sharyu',
  templateUrl: './sharyu.component.html',
  styleUrls: ['./sharyu.component.css']
})
export class SharyuComponent {
   isActive = false;
   isBoolean = true;
   fruitEmoji = '🥭';

   users = [
        {id: 1, name: 'Sharvari', age: 22, city: 'Pune'},
        {id: 2, name: 'John', age: 26, city: 'Mumbai'}
   ];

   ChangeColor(){
      this.isActive = !this.isActive;
   }
}

-------------------------------------------------------------
HOW TO USE THIS COMPONENT
-------------------------------------------------------------
Place the selector in app.component.html

<app-sharyu></app-sharyu>

Run the project using:
ng serve --open

-------------------------------------------------------------
PURPOSE OF THIS FILE
-------------------------------------------------------------
This file helps any reader understand:
- What this Angular component does
- What directives are used
- How the code works

-------------------------------------------------------------
END OF FILE
-------------------------------------------------------------
