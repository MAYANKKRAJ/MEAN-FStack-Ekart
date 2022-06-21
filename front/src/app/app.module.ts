import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { RegisterComponent } from './Components/Register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './Components/Dashboard/dashboard.component';
import { AllUsersComponent } from './Components/AllUsers/all-users.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from './Components/modal/modal.component';
import { MyInterceptorService } from './Interceptors/my-interceptor.service';
import { AllProductsComponent } from './ProductComponents/all-products.component';
import { ProductmodalComponent } from './ProductComponents/Modal/productmodal.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './Home/home.component';
import { HeaderComponent } from './Components/Header/header.component';
import { CartComponent } from './ProductComponents/Cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AllUsersComponent,
    //RegisterComponent
    ModalComponent,
    AllProductsComponent,
    ProductmodalComponent,
    HomeComponent,
    HeaderComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,ReactiveFormsModule, FormsModule,HttpClientModule,MatDialogModule,NgbModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,MatToolbarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
