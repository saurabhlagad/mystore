import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { BookedcarService } from '../bookedcar.service';
import { CarService } from '../car.service';

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

    description=''
    id=0
    image=undefined
    isAvailable=1

    toDate=''
    toTime=''
    fromDate=''
    fromTime=''
    drivingLicence=undefined
    destination=''


  ngOnInit(): void {
  }

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
    else if(this.destination.length==0)
    {
      this.toastr.warning('Please Select destination')
    }
    else if(this.drivingLicence==undefined)
    {
      this.toastr.warning('Please choose the driving licence image')
    }
    else{
      this.service.bookCar(this.id,this.toDate,this.toTime,this.fromDate,this.fromTime,this.drivingLicence,this.destination)
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
