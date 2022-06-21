import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/Services/user-service.service';
import { ModalComponent } from '../modal/modal.component';
import { UserModal } from './UserModal';


declare var window: any;
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styles: [
  ]
})
export class AllUsersComponent implements OnInit {

userModalObj:UserModal = new UserModal();
allUsers:any

modalform:FormGroup;
name:string="";
lastname:string="";
email:string="";
contact:number=585858;
password:string="";

  constructor(private userService:UserService, public dialog: MatDialog) { 
    this.modalform = new FormGroup({
      name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
      lastname:new FormControl(),
      email:new FormControl("",Validators.required),      
      contact:new FormControl("",[Validators.required, Validators.minLength(5),Validators.maxLength(13)]),
      password:new FormControl("",[Validators.required, Validators.minLength(5),Validators.maxLength(10)]),

    })
  }

  ngOnInit(): void {
    this.getAllUsers();
    
  }
  //Get All Users
  getAllUsers(){
    this.userService.allUsers().subscribe((posRes)=>{
      console.log("...................",posRes);      
      this.allUsers = posRes;
    });
  }

  //Edit Users (Pop will open with previous Data Of User)
  // onEdit(data:any){
  //   console.log('You Clicked me');    
  //   this.userModalObj.id = data.id;
  //   this.modalform.controls['name'].setValue(data.name);
  //   this.modalform.controls['lastname'].setValue(data.lastname);
  //   this.modalform.controls['email'].setValue(data.email);
  //   this.modalform.controls['password'].setValue(data.password);
  //   this.modalform.controls['contact'].setValue(data.contact);

    // this.userService.updateUser(data.value).subscribe(()=>{
    //   alert('Record Updated');
    // });
    
  // }
  

  //Update Users After Filling the records
  // updateUserData(){

  //       this.userModalObj.id =this.modalform.value.id;
  //       this.userModalObj.name =this.modalform.value.name;
  //       this.userModalObj.lastname =this.modalform.value.lastname;
  //       this.userModalObj.email =this.modalform.value.email;
  //       this.userModalObj.contact =this.modalform.value.contact;
  //       this.userModalObj.password =this.modalform.value.password;


  //   this.userService.updateUser(this.userModalObj, this.userModalObj.id).subscribe(()=>{
  //     alert('Record Updated');
  //   });
  // }

  openDialog(data:any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '550px',
      data: {  name:data.name, lastname:data.lastname, email:data.email, contact:data.contact, password:data.password, id:data._id},
      
    });

}
}
