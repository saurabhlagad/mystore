import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  url='http://localhost:4100/user/profile'

  getProfile(){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    }

    
   // console.log(`*************priceperHour=${pricePerHour}`)
   return this.http.get(this.url,httpOptions)
  }
  editProfile(image :string,phone :string,Address:string){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    }
    const body={image:image,phone:phone,Address:Address}
    return this.http.put(this.url,httpOptions)
  }
}
