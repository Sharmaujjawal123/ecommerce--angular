
import { Component, HostListener, Input } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NavContentComponent } from './nav-content/nav-content.component';
import { Router } from '@angular/router';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { DataService } from '../data.service';

import { AuthSevice } from '../state/auth/auth.service';
// import { UserService } from '../User/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../User/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../modals/AppState';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,NavContentComponent,MatButtonModule,MatIconModule,MatDividerModule,MatMenuModule,MatDialogModule,HttpClientModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
// @Input() visible:any;

// console.log(visible);

// visible:any;

constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private dialog:MatDialog,private auth:AuthSevice,
  private userService:UserService,private store:Store<AppState>){}
// visible=false;

handlogout(){
  // this.visible=true;
  this.userService.logout();
}
  userProfile:any;

ngOnInit(){
  if(localStorage.getItem("jwt")) this.userService.getUserProfile()
    this.store.pipe(select((store)=>store.user)).subscribe((user)=>{
  this.userProfile=user.userProfile
if(user.userProfile){
  this.dialog.closeAll();
}
})
}

  
 
  
isnavbarContentOpen:any
// @Input() selectedSection:any
currentSection:any
openNavbarContent(section:any){
  this.isnavbarContentOpen=true;
  this.currentSection=section;
}
closeNavbarContent(){
  this.isnavbarContentOpen=false;
  // this.currentSection=section;
}
navigateTo(cart:any){

  this.router.navigate(["account/order"])
}



// to open nav content

@HostListener('document:click',[`$event`])
onDocumentClick(event: MouseEvent) {
const modalContainer=document.querySelector(".modal-container");
const openButtons=document.querySelectorAll(".open-button")
let clickInsideButton=false;

openButtons.forEach((button:Element)=>{
  if(button.contains(event.target as Node)){
    clickInsideButton=true;
  }
})
if(modalContainer && !clickInsideButton && this.isnavbarContentOpen){
  this.closeNavbarContent();
}
}

handleOpenLoginModal(){
this.dialog.open(AuthComponent,{
  width:"400px",
  disableClose:false

})


}
}
