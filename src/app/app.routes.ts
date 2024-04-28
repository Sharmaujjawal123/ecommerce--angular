import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComComponent } from './cart-com/cart-com.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { PaaymentSuccsesComponent } from './paayment-succses/paayment-succses.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:"admin", loadChildren:()=>import("./admin/admin-routing.module").then((m)=>AdminRoutingModule)},
    {path:"",component:HomeComponent},
    {path:"product",component:ProductsComponent},

    {path:"cart",component:CartComComponent},
    {path:"product-details/:id",component:ProductDetailsComponent},
    {path:"checkout",component:CheckoutComponent},
    {path:"checkout/payment/:id",component:PaymentComponent},
    {path:'account/order',component:OrderComponent},
   
    {path:'order/:id',component:OrderDetailsComponent},
    {path:'payment-success',component:PaaymentSuccsesComponent},
    {path:':levelOne/:levelTwo/:levelThree',component:OrderDetailsComponent},
];

