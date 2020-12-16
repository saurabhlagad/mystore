import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProfileEditComponent } from '../profile-edit/profile-edit.component';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private toastr:ToastrService,private service:ProfileService,private router:Router,private modal:NgbModal) { }
firstname=''
lastname=''
email=''
address=''
phone=''
image=''
users=[]
getprofile(){
this.service.getProfile()
.subscribe(response=>{
  if(response['status']=='success')
  {
    this.users=response['data']
  }
  else{
    this.toastr.error(response['error'])
  }
})  
}
onEdit(user)
{
  console.log(`phone=${user.phone}`)
  console.log(`phone=${user.Address}`)
  const modalRef=this.modal.open(ProfileEditComponent,{size:'lg'})
    const component=modalRef.componentInstance as ProfileEditComponent
    component.phone=user.phone
    component.image=user.image
    component.Address=user.Address
    
    modalRef.result.finally(()=>{
      this.getprofile()
    })
    
}
  ngOnInit(): void {this.getprofile()
  }

}
