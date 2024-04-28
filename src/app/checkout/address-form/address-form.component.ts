import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AddressCardComponent } from '../address-card/address-card.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [MatDividerModule,MatButtonModule, MatIconModule,AddressCardComponent,
    CommonModule,FormsModule,MatFormFieldModule, MatInputModule, MatSelectModule,ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent {
address=[1,2,3,4]
constructor(private formBuilder:FormBuilder){

}

myForm:FormGroup=this.formBuilder.group({
  firstName:["",Validators.required],
  lastName:["",Validators.required],
  streetAddress:["",Validators.required],
  city:["",Validators.required],
  state:["",Validators.required],
  zipCode:["",Validators.required],
  mob:["",Validators.required],
  

})
  handleCreateOrder(item:any){

  }

  handleSubmit(){
    const formValue=this.myForm.value
console.log("form data",formValue);

  }

}
