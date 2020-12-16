import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
phone=''
image=undefined
Address=''
isImageUpdated=0
constructor(private toastr:ToastrService,private service:ProfileService,private modal:NgbModal,private router:Router) { }


  ngOnInit(): void {
  }
  onImageSelected(event){
    console.log(event)
    this.image=event.target.files[0]
    // console.log('*************')
    // console.log(this.drivingLicence)
    this.isImageUpdated=1
  }
  onCancel(){
    this.modal.dismissAll('cancel')
    // let dateTime = new Date()
    // console.log(dateTime.toISOString())
  }


  onEdit(){
    //let dateTime = new Date()
    
    //console.log(`toDate:${this.toDate} type=${typeof(this.toDate)}, toTime:${this.toTime} type=${typeof(this.toTime)}, fromDate:${this.fromDate} , fromTime:${this.fromTime} `)
    if(this.phone.length==0)
    {
      this.toastr.warning('Enter your phone number')
    }
    else if(this.Address.length==0)
    {
      this.toastr.warning('Enter your Address')
    }
    else if(this.image==undefined)
    {
      this.toastr.warning('Upload your profile picture')
    }
    
    else{
      console.log(`phone=${this.phone} & address=${this.Address} & image=${this.image}`)
      this.service.editProfile(this.image,this.phone,this.Address,this.isImageUpdated)
                .subscribe(response=>{
                  if(response['status']=='success')
                  {
                    this.toastr.success('Profile Edited Successfully')
                    this.modal.dismissAll('ok')
                    this.router.navigate(['/home/user/profile'])

                  }
                  else{
                    this.toastr.error(response['error'])
                  }
                })
    }
    
  }

}
