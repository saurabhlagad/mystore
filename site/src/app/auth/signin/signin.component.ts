import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  // providers:[AuthService]
})
export class SigninComponent implements OnInit {

  constructor(private router:Router,private toastr:ToastrService,private service:AuthService) { }
  email=''
  password=''
  isSignedin=0
  ngOnInit(): void {
  }

  onSignin(){
    if(this.email.length==0)
    {
      this.toastr.warning('Please,Enter email')
    }
    else if(this.password.length==0){
      this.toastr.warning('Please, Enter password')
    }
    else{
      this.service.userSignin(this.email,this.password)
                  .subscribe(response=>{
                    if(response['status']=='success')
                    {
                      this.isSignedin=1
                      const user=response['data']
                      sessionStorage['token']=user['authToken']
                      console.log(response['authToken'])
                      console.log('*********');
                      
                      sessionStorage['name']=user['firstname']+' '+user['lastname']
                      sessionStorage['email']=user['email']+''
                      sessionStorage['drivingLisence']=user['drivingLisence']
                      this.toastr.success('Welcome to Click&Go ' + sessionStorage['name'])
                      this.router.navigate(['/home/guest/home'])
                      console.log(`email=${sessionStorage['email']}`)
                    }
                    else{
                      this.toastr.error(response['error']+'')
                    }
                  })
      
    }
  }

  


  onSignup(){
    //console.log('in signup function')
    this.router.navigate(['/signup'])
  }
  
}
