import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/Dashboard/dashboard.component';
import { HomeComponent } from './Home/home.component';
import { AllProductsComponent } from './ProductComponents/all-products.component';
import { CartComponent } from './ProductComponents/Cart/cart.component';

const routes: Routes = [
  {
    path:"", component:DashboardComponent
  },
  {
    path:"dashboard", component:DashboardComponent
  },
  {
    path:'register', loadChildren: ()=>import('./Components/Register/register.module').then(r=>r.RegisterModule)
  },
  {
    path:'login', loadChildren: ()=>import('./Components/Login/login.module').then(l=>l.LoginModule)
  },
  {
    path:'products',component:AllProductsComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'cart', component:CartComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
