import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { BookedcarService } from '../bookedcar.service';
import { CarService } from '../car.service';
//import { MbscDatetimeOptions } from '../lib/mobiscroll/js/mobiscroll.angular.min.js';
//import { TimepickerModule } from '@bit/valor-software.ngx-bootstrap.timepicker';
import {AbstractControl, FormControl} from '@angular/forms';
//import { start } from 'repl';

@Component({
  selector: 'app-car-book',
  templateUrl: './car-book.component.html',
  styleUrls: ['./car-book.component.css']
})
export class CarBookComponent implements OnInit {

  constructor(private toastr:ToastrService,private service:BookedcarService,private modal:NgbModal,private router:Router) { }
  carName=''
    noOfSeats=0
    plateNo=''
    model=''
    transmission=''
    pricePerHour=0
    fuel=''
    startingPoint=''

    description=''
    id=0
    image=undefined
    isAvailable=1

    toDate=''
    toTime=''
    fromDate=''
    fromTime=''
    drivingLicence=sessionStorage['drivingLisence']
    destination=''
    minFromDate:any
    maxFromDate:any
    minFromTimeHour:any
    minFromTimeMinute:any
    minToDate:any
    minToTimeHour:any
    minToTimeMinute:any
    ctrl1={valid:false,errors:{}}
  ngOnInit(): void {
    console.log(`drivingLicence=${this.drivingLicence} and type=${typeof(this.drivingLicence)}`)
    this.minFromDate=new Date().toISOString().slice(0, 10)
    this.maxFromDate=new Date()
    this.maxFromDate.setDate(new Date().getDate() + 7)
    this.maxFromDate=this.maxFromDate.toISOString().slice(0,10)
    this.minFromTimeHour=new Date().getHours()
    this.minFromTimeMinute=new Date().getMinutes()
    console.log(`minFromTimeHour=${this.minFromTimeHour} and minFromTimeMinute=${this.minFromTimeMinute}`)
    

  }

  addMinutes(date,minutes){
   return new Date(date.getTime() + minutes*60000);
  }

  myTime: Date;
 
  ctrl = new FormControl('', (control: AbstractControl) => {
    const value = control.value;
 
    if (!value) {
      return null;
    }
 
    if(value.hour < this.minFromTimeHour && this.fromDate==this.minFromDate) {
      return {tooEarly: true};
    }
    else if(value.hour == this.minFromTimeHour && this.fromDate==this.minFromDate)
    {
      if(value.minute < this.minFromTimeMinute +10)
      return {tooEarly: true};
      else{
        console.log(`all okay`)
        this.fromTime=value.hour+':'+value.minute
        let fromDateTime=new Date(this.fromDate).toString().slice(0,16) + this.fromTime
        //console.log(`fromDAteTime=${fromDateTime} and currentdate=${new Date(`01-01-2020`)}`)
        let minToDateTime=this.addMinutes(new Date(fromDateTime),180).toString()
        console.log(`minToDateTime=${minToDateTime}`)
        this.minToDate=new Date(minToDateTime).toISOString().slice(0,10)
        this.minToTimeHour=new Date(minToDateTime).getHours()
        this.minToTimeMinute=new Date(minToDateTime).getMinutes()
        console.log(`minToDate=${this.minToDate} and mintoTimeHour=${this.minToTimeHour} and this.minToTimeMinute=${this.minToTimeMinute}`)
        
        
        this.ctrl1=new FormControl('', (control: AbstractControl) => {
          const value = control.value;
       
          if (!value) {
            return null;
          }
       
          if(value.hour < this.minToTimeHour && this.toDate==this.minToDate) {
            return {tooEarly: true};
          }
          else{
            this.toTime=value.hour+':'+value.minute
          }
          
          return null;
        });
      }
    }
    else{
      console.log(`all okay`)
      this.fromTime=value.hour+':'+value.minute
        let fromDateTime=new Date(this.fromDate).toString().slice(0,16) + this.fromTime
        //console.log(`fromDAteTime=${fromDateTime} and currentdate=${new Date(`01-01-2020`)}`)
        let minToDateTime=this.addMinutes(new Date(fromDateTime),180).toString()
        console.log(`minToDateTime=${minToDateTime}`)
        this.minToDate=new Date(minToDateTime).toISOString().slice(0,10)
        this.minToTimeHour=new Date(minToDateTime).getHours()
        this.minToTimeMinute=new Date(minToDateTime).getMinutes()
        console.log(`minToDate=${this.minToDate} and mintoTimeHour=${this.minToTimeHour} and this.minToTimeMinute=${this.minToTimeMinute}`)
        
        
        this.ctrl1=new FormControl('', (control: AbstractControl) => {
          const value = control.value;
       
          if (!value) {
            return null;
          }
       
          if(value.hour < this.minToTimeHour && this.toDate==this.minToDate) {
            return {tooEarly: true};
          }
          else{
            this.toTime=value.hour+':'+value.minute
          }
          
          return null;
        });
    }
 
    return null;
  });

  


  onImageSelected(event){
    console.log(event)
    this.drivingLicence=event.target.files[0]
    console.log('*************')
    console.log(this.drivingLicence)
    
  }
  onCancel(){
    this.modal.dismissAll('cancel')
    // let dateTime = new Date()
    // console.log(dateTime.toISOString())
  }

  // Validations(){
  //   this.currentDate=new Date()

  // }


  onBook(){
    //let dateTime = new Date()
    
    //console.log(`toDate:${this.toDate} type=${typeof(this.toDate)}, toTime:${this.toTime} type=${typeof(this.toTime)}, fromDate:${this.fromDate} , fromTime:${this.fromTime} `)
    if(this.toDate.length==0)
    {
      this.toastr.warning('Please select Date')
    }
    else if(this.toTime.length==0)
    {
      this.toastr.warning('Plaese select Time')
    }
    else if(this.fromDate.length==0)
    {
      this.toastr.warning('Please select from date')
    }
    else if(this.fromTime.length==0)
    {
      this.toastr.warning('Please select from Time')
    }
    else if(this.startingPoint.length==0){
      this.toastr.warning('Enter starting point of journey')
    }
    else if(this.destination.length==0)
    {
      this.toastr.warning('Please Select destination')
    }
    else if(this.drivingLicence==undefined)
    {
      this.toastr.warning('Please choose the driving licence image')
    }
    else{
       this.service.bookCar(this.id,this.toDate,this.toTime,this.fromDate,this.fromTime,this.drivingLicence,this.destination,this.startingPoint)
                .subscribe(response=>{
                  if(response['status']=='success')
                  {
                    this.toastr.success('Wait till admin confirm your request')
                    this.modal.dismissAll('ok')
                    this.router.navigate(['/home/car/booked-cars'])

                  }
                  else{
                    this.toastr.error(response['error'])
                  }
                })
      }
  }
}
