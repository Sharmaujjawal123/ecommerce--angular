import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
import { log } from 'console';
@Component({
  selector: 'app-cart-items',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,CommonModule],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss'
})
export class CartItemsComponent {

@Input() showButton:any
  updateCartItem(num:Number){
    console.log("num",num);
    
  }

  removeCartItem(){
    console.log("remove card item");
    
  }


}

