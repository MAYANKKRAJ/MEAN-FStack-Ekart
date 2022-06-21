import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  constructor(){
    console.log('Inside App');    
  }
  cartItem=0;

  getCartValue(value:any){
    this.cartItem= value;
    console.log(this.cartItem, "......");
    
    
  }
}
