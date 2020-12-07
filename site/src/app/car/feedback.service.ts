import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  
  constructor(private http:HttpClient) { }

  url='http://localhost:4100/feedback'

  postFeedback(content:string ,id:number,rating:number){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    }

    const body={
      content:content,
      rating:rating
    }
    // console.log(`*************priceperHour=${pricePerHour}`)
   return this.http.post(this.url+'/'+id,body,httpOptions)
  }

  getFeedback(id:number){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    }
    return this.http.get(this.url+'/'+id,httpOptions)
  }

}
