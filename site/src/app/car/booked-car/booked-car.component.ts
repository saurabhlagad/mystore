import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BookedcarService } from '../bookedcar.service';


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
                  }
                  else{
                    this.toastr.error(response['error'])
                  }
                })
  }



}

