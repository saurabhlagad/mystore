import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-car-feedback',
  templateUrl: './car-feedback.component.html',
  styleUrls: ['./car-feedback.component.css']
  
})
export class CarFeedbackComponent implements OnInit {
  ID=0
  carName=''
  content=''
  currentRate = 6
  rating=0
  constructor(private activatedRoute:ActivatedRoute,private modal:NgbModal,private toastr:ToastrService,private service:FeedbackService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.rating==0){
      this.toastr.warning('Please rate us!');
    }
    else{
    this.service.postFeedback(this.content,this.ID,this.rating)
    .subscribe(response=>{
      if(response['status']=='success')
      {
       this.toastr.success('Thank you for your valuable feedback!!')

      }
      else{
        this.toastr.error('Error!!')    
        }
    })

  }
}

}
