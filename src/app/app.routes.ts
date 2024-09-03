import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { logedGuard } from './core/guards/loged.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

export const routes: Routes = [

{path:"",component:AuthLayoutComponent ,canActivate:[logedGuard]
  , children:[
    {path:'',redirectTo:"login",pathMatch:"full",title:"login"},
    {path:"login", loadComponent:()=>import('./components/login/login.component').then((c)=>c.LoginComponent),title:"login"},
    {path:"register",loadComponent:()=>import('./components/register/register.component').then((c)=>c.RegisterComponent),title:"register"},
    {path:"forget",loadComponent:()=>import('./components/forget-password/forget-password.component').then((c)=>c.ForgetPasswordComponent),title:"register"},

  ]
},



{path:"",component:BlankLayoutComponent , canActivate:[authGuard] , children:[
  {path:'',redirectTo:"home",pathMatch:"full",title:"home"},

{path:"home" , component:HomeComponent,title:"home"},

{path:"products" , loadComponent:()=>import('./components/product/product.component').then((c)=>c.ProductComponent),title:"products"},

{path:"cart" , loadComponent:()=>import('./components/cart/cart.component').then((c)=>c.CartComponent),title:"cart"},
{path:"brands" ,loadComponent:()=>import('./components/brands/brands.component').then((c)=>c.BrandsComponent),title:"brands"},

{path:"categories",loadComponent:()=>import('./components/categories/categories.component').then((c)=>c.CategoriesComponent),title:"categories"},
{path:"details/:id",loadComponent:()=>import('./components/details/details.component').then((c)=>c.DetailsComponent),title:"details"},
{path:"allorders",loadComponent:()=>import('./components/all-orders/all-orders.component').then((c)=>c.AllOrdersComponent)},
{path:"orders/:id",loadComponent:()=>import('./components/orders/orders.component').then((c)=>c.OrdersComponent)},
{path:"wishList",loadComponent:()=>import('./components/wish-list/wish-list.component').then((c)=>c.WishListComponent),title:"WishList"},


]},




{path:"**", loadComponent:()=>import('./components/notfound/notfound.component').then((c)=>c.NotfoundComponent),title:"NotFoundPage"}

];
