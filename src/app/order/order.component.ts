import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { OrderCardComponent } from './order-card/order-card.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule,MatButtonModule,OrderCardComponent,MatCheckboxModule,FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
orderFilter=[
{value:"on_the_way",label:"on the way" },
{value:"delivered",label:"Delivered" },
{value:"cancelled",label:"Cancelled" },
{value:"Return",label:"Returned" },
]
  orders=[[1,1],[1,1,1]];

}
