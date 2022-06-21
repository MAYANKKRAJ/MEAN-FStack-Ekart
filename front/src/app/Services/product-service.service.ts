import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _http:HttpClient ) { }

  //Insert Product
  public insertProduct(product:any):Observable<any>{
    return this._http.post("http://localhost:8000/api/product/insert",product);
  }

  //Find All Products
  public findAllProducts():Observable<any>{
    return this._http.get("http://localhost:8000/api/products")
     .pipe(map((res:any)=>{
       return res;
     }));
  }

  //Find Product By Id
  public findProductById(id:any):Observable<any>{
    return this._http.get("http://localhost:8000/api/product/"+id);
  }

  // Update Product Details by Id
  public updateProductById(data:any,id:any):Observable<any>{
    return this._http.put("http://localhost:8000/api/product/modify/"+id, data)
  }


  //Delete Products By Id
  public deleteProductById(id:any){
    return this._http.delete("http://localhost:8000/api/product/del/"+id)
  }
}
