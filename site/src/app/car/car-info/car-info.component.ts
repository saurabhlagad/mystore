import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CarBookComponent } from '../car-book/car-book.component';
import { CarService } from '../car.service';
import { FeedbackService } from '../feedback.service';


@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {
  currentRate = 6;
  rate=0
  feedbacks=[]
  constructor(private activatedRoute:ActivatedRoute,private modal:NgbModal,private toastr:ToastrService,private service:CarService, private feedbackservice:FeedbackService) { }
  cars=[]
  car={
    carName:'',
    description:'',
    noOfSeats:0,
    pricePerHour:0,
    transmission:'',
    fuel:'',
    isAvailable:0,
    image:undefined
  }
  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.queryParams['id']
    this.service.carInfo(id)
                .subscribe(response=>{
                  if(response['status']=='success')
                  {
                    this.cars=response['data']
                    this.car=this.cars[0]
                  }
                  else{
                    this.toastr.error(response['error'])
                  }
                })
                this.feedbackservice.getFeedback(id)
                .subscribe(response=>{
                  if(response['status']=='success')
                  {
                    this.feedbacks=response['data']
                    // this.car=this.cars[0]
            
                  }
                  else{
                    this.toastr.error(response['error'])
                  }
                })
  }

  loadCar(car){
    this.service.carInfo(car['id'])
                .subscribe(response=>{
                  if(response['status']=='success')
                  {
                    this.cars=response['data']
                    this.car=this.cars[0]

                  }
                  // else{
                  //   this.toastr.error(response['error'])
                  // }
                })
  }
  loadFeedback(){
   
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
      this.loadCar(car['id'])
    })
    }
    else{
      this.toastr.error(`Please,signin first`)
    }
    
  }

  onSubmit(){
    console.log(`rating=`+this.currentRate)
  }

}
