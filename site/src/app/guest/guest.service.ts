import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http:HttpClient) { }
  url='http://localhost:4100/user/faq'
  
  postFaq(name:string,email:string,password:string,subject:string,message:string){
    // const httpOptions={
    //   headers:new HttpHeaders({
    //     token:sessionStorage['token']
    //   })
    // }

    const body={
      name:name,
      email:email,
      password:password,
      subject:subject,
      message:message
    }
    // console.log(`*************priceperHour=${pricePerHour}`)
   return this.http.post(this.url,body)
  }

}

