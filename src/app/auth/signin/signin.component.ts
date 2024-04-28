import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Store, StoreModule } from '@ngrx/store';
// import { signupComponent } from '../signup/signup.component';
import { AuthComponent } from '../auth.component';
import { SignupComponent } from '../signup/signup.component';
// import { AuthSevice } from '../../state/auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../data.service';
import { AuthSevice } from '../../state/auth/auth.service';
import { UserService } from '../../User/user.service';



@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule,MatButtonModule,ReactiveFormsModule,CommonModule,
    MatInputModule,MatFormFieldModule,SignupComponent,AuthComponent,
    HttpClientModule,],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})

export class SigninComponent {
  @Input() changeTamplate:any
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private dialog:MatDialog,private dataSer:DataService,private auth:AuthSevice,private user:UserService){}


loginForm : FormGroup=this.formBuilder.group({
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.minLength(8)]]
})

visible:any=false;
submitForm():void{
  if(this.loginForm.valid){
    this.auth.login(this.loginForm.value)

    console.log("log",this.loginForm.value);
    
    const formData = this.loginForm.value;
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);



  //   this.http.post('http://localhost:5454/auth/signin', formData).subscribe(
  //     (response) => {
  //       console.log('Signin successful:', response);
  //       this.router.navigate([''])
        

  //       // updateData() {
  //         this.dataSer.updateData(false);
  //       // }
  //       console.log(this.dataSer);
        
  //       this.dialog.closeAll();
  //       // this.visible=true;
        
  //       // Handle successful signin (e.g., store token, redirect to dashboard)
  //     },
  //     (error) => {
  //       console.error('Signin failed:', error);
  //       // Handle signin failure (e.g., display error message)
  //     }
  //   );
  // } else {
  //   // Handle form validation errors
  //   console.log('Form validation failed');
  // }
    
  }
}

}