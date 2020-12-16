import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private router:Router) { }
  
  ngOnInit(): void {
  }

  onLogout(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('drivingLisence')
    this.router.navigate(['/signin'])
    console.log('in onLogout function')
  }


}
