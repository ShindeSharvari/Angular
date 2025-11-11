import { Component } from '@angular/core';

@Component({
  selector: 'app-sharyu',
  templateUrl: './sharyu.component.html',
  styleUrls: ['./sharyu.component.css']
})
export class SharyuComponent {
   isActive=false

   ChangeColor(){
    this.isActive = !this.isActive
   }
}
