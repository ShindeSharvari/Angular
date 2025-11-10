import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

    //isBoolean:boolean =true;
    isBoolean:boolean =false;
    fruitEmoji='🍉'
     users=[
      {
        id:1,
        name:"Sharvari",
        age:24,
        city:"Pune"
      },
      {
        id:2,
        name:"Sakshi",
        age:21,
        city:"Nashik"
      },
      {
        id:3,
        name:"Rakhi",
        age:22,
        city:"Mumbai"
      },
      {
        id:4,
        name:"Ganesh",
        age:22,
        city:"Latur"
      },
      {
        id:5,
        name:"Omkar",
        age:20,
        city:"Pune"
      },
      {
        id:6,
        name:"Aniket",
        age:26,
        city:"Satara"
      },
     ]
}
