import { Component, Input } from '@angular/core';
import { ProductSliderComponent } from '../product-slider/product-slider.component';

@Component({
  selector: 'app-home-product-card',
  standalone: true,
  imports: [ProductSliderComponent],
  templateUrl: './home-product-card.component.html',
  styleUrl: './home-product-card.component.scss'
})
export class HomeProductCardComponent {
@Input()  product:any
}
