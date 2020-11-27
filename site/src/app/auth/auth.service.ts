import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='http://localhost:4100/user'
  constructor(private http:HttpClient) { }
  userSignup(firstname:string,lastname:string,email:string,phone:string,password:string){
    // const httpOptions={
    //   headers:new HttpHeaders({
    //     token:sessionStorage['token']
    //   })
    // }

    const body={
      firstname:firstname,
      lastname:lastname,
      email:email,
      phone:phone,
      password:password
    }

    return this.http.post(this.url + '/signup',body)
  }


  userSignin(email:string,password:string){
    const body={
      email:email,
      password:password
    }
    return this.http.post(this.url + '/signin',body)
  }
}

