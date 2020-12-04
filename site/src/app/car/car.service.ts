import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  url='http://localhost:4100/car'

  getCars(pricePerHour:number,noOfSeats:number){
    // const httpOptions={
    //   headers:new HttpHeaders({
    //     token:sessionStorage['token']
    //   })
    // }

    const body={
      pricePerHour:pricePerHour,
      noOfSeats:noOfSeats
    }
    console.log(`*************priceperHour=${pricePerHour}`)
   return this.http.post(this.url+'/filter',body)
  }

  carInfo(id:number){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    }

    return this.http.get('http://localhost:4100/car/car-info/'+id,httpOptions)
  }



}


