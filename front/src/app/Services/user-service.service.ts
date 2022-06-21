import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  //REGISTER
  public register(reg_details:any):Observable<any>{
    return this.http.post("http://localhost:8000/api/auth/register",reg_details);
  }

  //LOGIN
  public login(login_details:any):Observable<any>{
    return this.http.post("http://localhost:8000/api/auth/login",login_details);
  }

  //All Users
  public allUsers():Observable<any>{
    return this.http.get("http://localhost:8000/api/auth/users");
  }

  //Update Users
  public updateUser(data:any, id:number):Observable<any>{
    return this.http.put("http://localhost:8000/api/auth/update/"+id ,data);
  }
}
