import { Component } from '@angular/core';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { menJeans } from '../../Data/ecommerce-products-data-master/men-Jeans';
import { gounsPage1 } from '../../Data/ecommerce-products-data-master/Gouns/gouns';
import { lehngacholiPage2 } from '../../Data/ecommerce-products-data-master/Saree/lenghaCholiPage2';
import { mensShoesPage1 } from '../../Data/ecommerce-products-data-master/shoes';
import { kurtaPage1 } from '../../Data/ecommerce-products-data-master/Kurta/kurta';
import { mens_kurta } from '../../Data/ecommerce-products-data-master/Men/men_kurta';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainCarouselComponent,ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
menJeans:any
womenGouns:any
lehnga:any
mensKurta:any
menShoes:any
ngOnInit(){
  this.menJeans=menJeans.slice(0,5)  //to show only 5 product
  this.womenGouns=gounsPage1.slice(0,5);
  this.lehnga=lehngacholiPage2.slice(0,5);
  this.menShoes=mensShoesPage1.slice(0,5);
  this.mensKurta=mens_kurta.slice(0,5);

}
}
