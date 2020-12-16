import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { totalmem } from 'os';

@Injectable({
  providedIn: 'root'
})
export class BookedcarService {
  url='http://localhost:4100/bookedcar'
  constructor(private http:HttpClient) { }


  getCars(){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    }
    //console.log(`*************priceperHour=${pricePerHour}`)
   return this.http.get(this.url,httpOptions)
  }


  bookCar(carId:number,toDate:string,toTime:string,fromDate:string,fromTime:string,drivingLicence:string,destination:string,startingPoint:string){
      console.log(`in bookcar service`)
      console.log(`carId:${carId} , toDate:${toDate} , toTime:${toTime} , fromDate:${fromDate} , fromTime:${fromTime} ,drivinglicence:${drivingLicence} , destination=${destination}`)

    const body=new FormData()
    body.append("carId",carId+'')
    body.append("toDate",toDate)
    body.append("toTime",toTime)
    body.append("fromDate",fromDate)
    body.append("fromTime",fromTime)
    body.append("image",drivingLicence)
    body.append("destination",destination)
    body.append("startingPoint",startingPoint)
    //console.log('&*&&&&&&&&&')
     // console.log(body)
      const httpOptions={
        headers:new HttpHeaders({
          token:sessionStorage['token']
        })
      }

      return this.http.post(this.url,body,httpOptions)
    }

//     bookCarWithoutLisence(carId:number,toDate:string,toTime:string,fromDate:string,fromTime:string,destination:string,startingPoint:string){
//       console.log(`in bookcar service`)
//  //console.log(`carId:${carId} , toDate:${toDate} , toTime:${toTime} , fromDate:${fromDate} , fromTime:${fromTime} ,drivinglicence:${drivingLicence} , destination=${destination}`)

//     const body={
//       carId:carId,
//       toDate:toDate,
//       toTime:toTime,
//       fromDate:fromDate,
//       fromTime:fromTime,
//       startingPoint:startingPoint
//     }
//     //console.log('&*&&&&&&&&&')
//      // console.log(body)
//       const httpOptions={
//         headers:new HttpHeaders({
//           token:sessionStorage['token']
//         })
//       }

//       return this.http.post(this.url+'/withoutLisence',body,httpOptions)
//     }

    cancelBooking(id:number){
      const httpOptions={
        headers:new HttpHeaders({
          token:sessionStorage['token']
        })
      }

      return this.http.delete(this.url+'/'+id,httpOptions)
    }

    // getRent(id:number){
    //   const httpOptions={
    //     headers:new HttpHeaders({
    //       token:sessionStorage['token']
    //     })
    //   }

    //   return this.http.get(this.url+'/rent/'+id,httpOptions)
    // }

}

