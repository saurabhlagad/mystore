import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname=''
  lastname=''
  email=''
  phoneNo=''
  password=''
  confirmPassword=''
  constructor(private router:Router,private toastr:ToastrService,private service:AuthService) { }

  ngOnInit(): void {
  }
  onSignup(){
    if(this.firstname.length==0)
    {
      this.toastr.warning('Please enter Firstname')
    }
    else if(this.lastname.length==0)
    {
      this.toastr.warning('Please, Enter Lastname')
    }
    else if(this.email.length==0)
    {
      this.toastr.warning('Email is mandatory')
    }
    else if(this.phoneNo.length==0)
    {
      this.toastr.warning('Phone no is mandatory') 
    }
    else if(this.password.length==0)
    {
      this.toastr.warning('Please, Enter password')
    }
    else if(this.confirmPassword.length==0)
    {
      this.toastr.warning('Please,enter confirm password')
    }
    else if(!(this.password==this.confirmPassword))
    {
      this.toastr.warning('password and confirm password are not matching')
    }
    else{
      this.service.userSignup(this.firstname,this.lastname,this.email,this.phoneNo,this.password)
                  .subscribe(response=>{
                    if(response['status']=='success')
                    {
                      this.toastr.success('Signup completed ! Now Check your email box to activate your acount')
                      this.router.navigate(['/signin'])
                    }
                    else{
                      this.toastr.error(response['error'])
                    }
                  })
    }
  }


  onSignin(){
    this.router.navigate(['/signin'])
  }
}
