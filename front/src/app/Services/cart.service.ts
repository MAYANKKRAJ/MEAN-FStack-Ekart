import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[];
  public ProductList = new BehaviorSubject<any>([]);
  constructor() { }

  getCartProducts(){
    return this.ProductList.asObservable();
  }

  addToCart(item:any){
    this.cartItemList.push(item);
    this.ProductList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
    
  }

  getTotalPrice():number{
    let TotalPrice = 0;
    this.cartItemList.map((a:any)=>{
      TotalPrice += a.total;
    })
    return TotalPrice;
  }

  removeCartItem(item:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(item.id == a.id){
        this.cartItemList.splice(index,1);
      }
    });
  }

  emptyCart(){
    this.cartItemList = [];
    this.ProductList.next(this.cartItemList);
  }
}
