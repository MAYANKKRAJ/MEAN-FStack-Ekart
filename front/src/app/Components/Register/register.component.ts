import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registrationForm:FormGroup;
  constructor(private regService:UserService) {
    console.log('inside Regiser ');
    
    this.registrationForm = new FormGroup({
      name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
      lastname:new FormControl(),
      email:new FormControl("",Validators.required),      
      contact:new FormControl("",[Validators.required, Validators.minLength(5),Validators.maxLength(13)]),
      password:new FormControl("",[Validators.required, Validators.minLength(5),Validators.maxLength(10)]),
    })
   }

  ngOnInit(): void {
  }

  regFun(){
    console.log("Registration Form Working Fine...    )",this.registrationForm.value);
    this.regService.register(this.registrationForm.value).subscribe((posRes)=>{
      alert("user added successfully...")
      this.registrationForm.reset();

    });
    
  }

}
