import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { AuthComponent } from '../auth.component';
import { AuthSevice } from '../../state/auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, MatButtonModule, ReactiveFormsModule, CommonModule, MatInputModule,
     MatFormFieldModule, AuthComponent,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  @Input() changeTamplate: any
  constructor(private formBuilder: FormBuilder, private store: Store,private http:HttpClient,private auth:AuthSevice) { }


  signUpForm: FormGroup = this.formBuilder.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  submitForm(): void {
    if (this.signUpForm.valid) {
    
      console.log("log", this.signUpForm.value);
      this.auth.register(this.signUpForm.value);


    //   const formData = this.signUpForm.value;
    //   console.log('First Name:', formData.firstName);
    //   console.log('Last Name:', formData.lastName);
    //   console.log('Email:', formData.email);
    //   console.log('Password:', formData.password);

    //   // Send POST request to backend
    //   this.http.post('http://localhost:5454/auth/signup', formData).subscribe(
    //     (response) => {
    //       console.log('Signup successful:', response);
    //       // Handle successful signup (e.g., redirect to signUp page)
    //     },
    //     (error) => {
    //       console.error('Signup failed:', error);
    //       // Handle signup failure (e.g., display error message)
    //     }
    //   );
    // } 
    // else {
    //   // Handle form validation errors
    //   console.log('Form validation failed');
    // }
    }
  }

}