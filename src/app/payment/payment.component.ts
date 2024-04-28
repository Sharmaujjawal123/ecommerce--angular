import { Component } from '@angular/core';
import { AddressCardComponent } from '../checkout/address-card/address-card.component';
import { CommonModule } from '@angular/common';
import { CartItemsComponent } from '../cart-items/cart-items.component';
import { MatDivider } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [AddressCardComponent,CommonModule,CartItemsComponent,MatDivider,MatButtonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
products=[1,1,1,1]
}
