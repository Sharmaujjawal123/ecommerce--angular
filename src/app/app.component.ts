import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserService } from './User/user.service';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Router } from 'express';
import { AppState } from './modals/AppState';
import { log } from 'console';
// import { AdminComponent } from './admin/component/admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, HomeComponent, NavbarComponent, FooterComponent, AdminModule, AdminRoutingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce';
  // constructor(private user:UserService){}
  constructor(private userService: UserService,private store:Store<AppState>) { }
  

 

  ngOnInit() {
    if (localStorage.getItem("jwt"))
      this.userService.getUserProfile()
    this.store.pipe(select((store) => store.auth)).subscribe((user) => {
    this.userService.getUserProfile();
    console.log("storre",this.store);
    
    })
  }

}
