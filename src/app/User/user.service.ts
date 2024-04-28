import {Inject, Injectable } from "@angular/core";
import { BASE_API_URL } from "../config/api";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { getUserProfileFailure, getUserProfileSuccess, logoutSuccess } from "./user.action";
import { DOCUMENT } from "@angular/common";




@Injectable({
providedIn:'root'
})

export class UserService{
    private apiUrl=BASE_API_URL+"api"
   headers:any
  constructor(private http: HttpClient, private store: Store) {
    // const localStorage = document.defaultView?.localStorage;
    // Initialize headers without accessing localStorage
    this. headers=new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('jwt')}`)
  }




getUserProfile(){
    const headers=new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('jwt')}`)
    return this.http.get(`${this.apiUrl}/users`,{headers}).pipe(map((user:any)=>{
        console.log(' user profile',user);
       
       return getUserProfileSuccess({userProfile:user});
    }),
catchError((error)=>{
    return of(getUserProfileFailure(
        error.response
    ))
})
).subscribe((action)=>this.store.dispatch(action))
   
}


logout(){
    localStorage.removeItem("jwt");
    this.store.dispatch(logoutSuccess())
}

}