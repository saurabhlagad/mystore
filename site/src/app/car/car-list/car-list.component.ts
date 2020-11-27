import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BookedCarComponent } from '../booked-car/booked-car.component';
import { CarBookComponent } from '../car-book/car-book.component';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private toastr:ToastrService,private service:CarService,private router:Router,private modal:NgbModal) { }
  cars=[]
  searchText=''
  pricePerHour=0
  noOfSeats=0
  ngOnInit(): void {
    this.loadCars()
  }
  loadCars(){
    this.service.getCars(this.pricePerHour,this.noOfSeats)
                .subscribe(response=>{
                  if(response['status']=='success')
                  {
                    this.cars=response['data']
                  }
                  else{
                    this.toastr.error(response['error'])
                  }
                })
  }

  onBook(car){
    if(sessionStorage['token'])
    {
      const modalRef=this.modal.open(CarBookComponent,{size:'lg'})
    const component=modalRef.componentInstance as CarBookComponent
    component.carName=car.carName
    component.noOfSeats=car.noOfSeats
    component.plateNo=car.plateNo
    component.model=car.model
    component.transmission=car.transmission
    component.pricePerHour=car.pricePerHour
    component.fuel=car.fuel
    component.description=car.description
    component.id=car.id
    component.image=car.image
    component.isAvailable=car.isAvailable
    modalRef.result.finally(()=>{
      this.loadCars()
    })
    }
    else{
      this.toastr.error(`Please,signin first`)
    }
    
  }
}
