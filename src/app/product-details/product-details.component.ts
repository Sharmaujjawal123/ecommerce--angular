import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { ReviewCardComponent } from './review-card/review-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { mensShoesPage1 } from '../../Data/ecommerce-products-data-master/shoes';
import { ProductCardComponent } from '../product-card/product-card.component';
import { dressPage1 } from '../../Data/ecommerce-products-data-master/dress/page1';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatRadioModule,CommonModule,FormsModule,MatButtonModule,ReviewCardComponent,MatProgressBarModule,ProductCardComponent,StarRatingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  selectedSize:any;
  reviews=[1,2,3,4,5,6,6]
  relatedProduct:any
  constructor(private router:Router){

  }
handleAddToCart(){
  console.log("selected size",this.selectedSize);
  this.router.navigate(['cart'])
 
}
ngOnInit(){
  this.relatedProduct=dressPage1
}
}
