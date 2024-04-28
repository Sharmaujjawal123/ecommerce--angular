import { Component } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../User/user.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [SigninComponent,SignupComponent,CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  isLoggedIn=true;
  constructor(private user:UserService){}

changeTemplate=()=>{
this.isLoggedIn = !this.isLoggedIn;
  }
}
