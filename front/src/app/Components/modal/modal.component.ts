import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {
  }

  // food:string="";
  // name:string="";
  // lastname:string="";
  // email:string="";
  // contact:Number=515452;
  // password:string="";

  constructor(
    private userService:UserService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  // onNoClick(): void {
  //   this.dialogRef.close({
      // food: this.food,
      // name: this.name,
      // lastname: this.lastname,
      // email: this.email,
      // contact: this.contact,
      // password: this.password
      
  //   });    
  // }

  updatedData:any;
  updateUser(simba:any){
    console.log("simba ",simba);
    console.log("Data ",this.data);
    
    // console.log('ID SIMBA :', simba.id);
    // console.log('THIS DATA :', this.data.id);
    
    
   // console.log(this.data);
    this.userService.updateUser(this.data, this.data.id).subscribe((posRes)=>{
      this.updatedData = posRes;
      console.log(this.updatedData);
      
    });
    
  }

  

}
