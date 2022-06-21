import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private userService:UserService, private router:Router) {
    console.log('inside Login ');
    this.loginForm = new FormGroup({
      email:new FormControl("",Validators.required),
      password: new FormControl("",Validators.required)
    })
   }

  ngOnInit(): void {
  }

  loginFun(){
    console.log("Hello Login Form is Working Fine.....    :)");
    this.userService.login(this.loginForm.value).subscribe((result)=>{
      if(result.login == "success"){
        console.log('Result Token: ',result.token);        
        window.localStorage.setItem("token",result.token);
        console.log("Local Storage ",window.localStorage.getItem("token"));
        
        this.router.navigate(["/dashboard"]);

      }else{
        alert('Please Enter the Valid Data');
      }
      console.log(result);
      
    });   
  }

}


