import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any;
  public carts:any[]=new Array();  
  cartLength =0;

  // @Output() cartValue = new EventEmitter();

  constructor(private productService:ProductServiceService, private cartService:CartService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.findAllProducts().subscribe((posRes)=>{
      this.products = posRes;

      this.products.forEach((a:any) => {
        Object.assign(a,{quantityL:1, total:a.p_price})
      });
    });
  }

  addToCart(item:any){
    this.cartService.addToCart(item);
  }

  // addToCart(index:number){
  //   this.carts.push(this.products[index])
  //  // console.log(this.carts.length, 'Crts Length...............');
  //  // this.cartValue.emit(this.carts.length)   
  // }

  // public removeCart(index:any){
  //   this.carts.splice(index,1);
  // }

}
