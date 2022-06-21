import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-productmodal',
  templateUrl: './productmodal.component.html',
  styleUrls: ['./productmodal.component.css']
})
export class ProductmodalComponent implements OnInit {

  updatedData:any;

  constructor(
    private productService : ProductServiceService,
    public dialogRef: MatDialogRef<ProductmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
     
  ) { }

  ngOnInit(): void {
  }

  updateProducts(alpha:any){
    //console.log("Data..... ",alpha); 
    this.productService.updateProductById(alpha, alpha.id).subscribe((posRes)=>{
      this.updatedData=posRes;
      console.log("Updated Data is ", this.updatedData);
      
    }); 


  }

 
  fileChangeEvent(fileInput: any){

  }

}
