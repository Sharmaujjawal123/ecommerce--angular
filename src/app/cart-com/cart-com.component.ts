import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItemsComponent } from '../cart-items/cart-items.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-com',
  standalone: true,
  imports: [CommonModule,CartItemsComponent,MatDividerModule,MatButtonModule],
  templateUrl: './cart-com.component.html',
  styleUrl: './cart-com.component.scss'
})
export class CartComComponent {
cart=[1,2,1];

constructor(private router:Router){

}
navigateToCheckout(){
this.router.navigate(["checkout"]);
}

}
