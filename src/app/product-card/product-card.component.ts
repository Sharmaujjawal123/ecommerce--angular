import { Component, Input } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
@Input() product:any

constructor(private router:Router){

}
navigate(){
  this.router.navigate([`/product-details/${2}`])
}
}
