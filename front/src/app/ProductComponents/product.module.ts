import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductmodalComponent } from './Modal/productmodal.component';
import { CartComponent } from './cart.component';



@NgModule({
  declarations: [
    ProductmodalComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
