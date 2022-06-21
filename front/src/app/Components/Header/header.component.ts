import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalCartItem : number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getCartProducts().subscribe((posRes)=>{
      this.totalCartItem = posRes.length;
    });
  }

}
