import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GuestService } from '../guest.service';
//import {AbstractControl, FormControl} from '@angular/forms';


@Component({
  selector: 'app-guest-aboutus',
  templateUrl: './guest-aboutus.component.html',
  styleUrls: ['./guest-aboutus.component.css']
})
export class GuestAboutusComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private toastr:ToastrService,private service:GuestService) { }
  fullName=''
  email=''
  subject=''
  message=""
  password=''
  ngOnInit(): void {
    this.fullName=sessionStorage['name']
    this.email=sessionStorage['email']
    console.log(`name: ${this.fullName} and email=${sessionStorage['email']}`)
  }

  onSubmit(){
    if(this.fullName.length==0){
      this.toastr.warning('Please Enter your name')
    }
    else if(this.email.length==0){
      this.toastr.warning('Please Enter email')
    }
    else if(this.subject.length==0)
    {
      this.toastr.warning('Please Enter Subject')
    }
    else if(this.password.length==0){
      this.toastr.warning('Please enter Email Password')
    }
    else if(this.message.length==0){
      this.toastr.warning('Please Enter Message')
    }
    else{
        this.service.postFaq(this.fullName,this.email,this.password,this.subject,this.message)
        .subscribe(response=>{
          if(response['status']=='success')
          {
            this.toastr.success('Check your email inbox for reply')
          }
          else{
            this.toastr.error('Error!!')    
            }
        })
      }
    }
    

}
