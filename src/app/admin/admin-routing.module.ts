import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminProductsComponent } from './component/admin-products/admin-products.component';
import { OrdersTableComponent } from './component/orders-table/orders-table.component';
import { CustomersComponent } from './component/customers/customers.component';
import { CreateProductComponent } from './component/create-product/create-product.component';

const routes: Routes = [
  {path:"",component:AdminComponent,children:[
    {path:"",component:DashboardComponent},
    {path:"product",component:AdminProductsComponent},
    {path:"orders",component:OrdersTableComponent},
    {path:"customers",component:CustomersComponent},
    {path:"product_create",component:CreateProductComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
