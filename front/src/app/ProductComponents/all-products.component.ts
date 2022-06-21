import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductServiceService } from '../Services/product-service.service';
import { ProductmodalComponent } from './Modal/productmodal.component';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styles: [
  ]
})
export class AllProductsComponent implements OnInit {

  allProducts:any;
  //console.log(posRes);
  

  constructor(private productService:ProductServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.findAllProducts().subscribe((posRes)=>{
      console.log("......",posRes);
      this.allProducts = posRes;
      console.log("......",posRes);
    });
  }


  openDialog(data:any): void {
    const dialogRef = this.dialog.open(ProductmodalComponent, {
      width: '550px',
      data: {  p_name:data.p_name, p_details:data.p_details, p_warranty:data.p_warranty, p_cost:data.p_cost, p_image:data.p_image, id:data._id},
      
    });

}



}
