import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { filters, singleFilter } from './FilterData';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProductCardComponent } from '../product-card/product-card.component';
import { mensPantsPage1 } from '../../Data/ecommerce-products-data-master/pants/men_page1';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatDividerModule,MatMenuModule,CommonModule,MatListModule,FormsModule,JsonPipe,MatCheckboxModule,ReactiveFormsModule

  ,MatRadioModule,ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  filterData:any;
  singleFilterData:any
constructor(private router:Router,private activatedRoute:ActivatedRoute){
}
  menPants:any
  ngOnInit(){
    this.filterData=filters
    this.singleFilterData=singleFilter
    this.menPants=mensPantsPage1
  }


  // to give params click to filter

handleMultipleSelectFilter(value:string,sectionId:string){
  const queryParams={...this.activatedRoute.snapshot.queryParams};
  
  // console.log("query",queryParams);

  
  const filterValues=queryParams[sectionId]?queryParams[sectionId].split(",") : [];
  const valueIndex=filterValues.indexOf(value);
  if (valueIndex===-1) {
      // Add the value to the list of selected values for this filter section
      filterValues.push(value);
  } else{
     // Remove the value from the list of selected values for this filter section
     filterValues.splice(valueIndex,1)
  }

  if(filterValues.length>0){
    queryParams[sectionId]=filterValues.join(',');
  }
  else{
    delete queryParams[sectionId];
}


this.router.navigate([],{queryParams})
}

handleSingleSelectFilter(value:string,sectionId:string){
  const queryParams={...this.activatedRoute.snapshot.queryParams};
  queryParams[sectionId]=value;
  this.router.navigate([],{queryParams})
  
}


}

