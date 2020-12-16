import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BookedcarService } from '../bookedcar.service';
import { CarFeedbackComponent } from '../car-feedback/car-feedback.component';
import { CarRentComponent } from '../car-rent/car-rent.component';


@Component({
  selector: 'app-booked-car',
  templateUrl: './booked-car.component.html',
  styleUrls: ['./booked-car.component.css']
})
export class BookedCarComponent implements OnInit {

  constructor(private toastr:ToastrService,private service:BookedcarService,private router:Router,private modal:NgbModal) { }
    bookedcars=[]
  ngOnInit(): void {
   this.loadBookedCars()
  }

  loadBookedCars(){
    this.service.getCars()
                .subscribe(response=>{
                  if(response['status']=='success')
                  {
                    this.bookedcars=response['data']
                  }
                  else{
                    this.toastr.error(response['error'])
                  }
                })
  }

  continueBooking(){
    this.router.navigate(['/home/car/car-list'])
  }

  onCancel(bookedcar){
    this.service.cancelBooking(bookedcar.id)
                .subscribe(response=>{
                  if(response['status']=='success')
                  {
                    this.toastr.success('Booking Canceled')
                    this.loadBookedCars()
                    this.router.navigate(['home/car/bookedcars'])
                  }
                  else{
                    this.loadBookedCars()
                    this.toastr.error(response['error'])
                    this.router.navigate(['home/car/bookedcars'])

                  }
                })
  }
onFeedback(car){
    const modalRef=this.modal.open(CarFeedbackComponent,{size:'lg'})
    const component=modalRef.componentInstance as CarFeedbackComponent
    component.ID=car.carId
    component.carName=car.carName
    modalRef.result.finally(()=>{
      this.loadBookedCars()
    })
}

carRent(car){
  const modalRef=this.modal.open(CarRentComponent,{size:'lg'})
    const component=modalRef.componentInstance as CarRentComponent
    component.id=car.carId
    component.carName=car.carName
    component.destination=car.destination
    component.rideDuration=car.rideDuration
    component.fromDate=car.fromDate
    component.returnOn=car.returnOn
    component.pricePerHour=car.pricePerHour
    component.totalRent=car.totalRent
    component.fromTime=car.fromTime
    component.carName=car.carName
    modalRef.result.finally(()=>{
      this.loadBookedCars()
    })
}

}

