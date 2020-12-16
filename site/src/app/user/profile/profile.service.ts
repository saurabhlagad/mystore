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
  editProfile(image :string,phone :string,Address:string,isUpadated:number){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    }
    //const body={image:image,phone:phone,Address:Address}
    if(isUpadated==1){
      const body=new FormData()
    
    body.append("phone",phone)
    body.append("Address",Address)
    body.append("image",image)
    console.log(`phone=${phone} & address=${Address} & image=${image}`)
    console.log(`body=${body}`)
    return this.http.put(this.url,body,httpOptions)
    }

    else{
      const body={
        Address:Address,
        phone:phone
      }
      return this.http.put(this.url+'/withoutimage',body,httpOptions)
    }
    
  }

}