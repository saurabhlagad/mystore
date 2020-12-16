//import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BookedcarService } from '../bookedcar.service';
import { Component, OnInit, ElementRef ,ViewChild,ChangeDetectionStrategy } from '@angular/core';
import   { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-car-rent',
  templateUrl: './car-rent.component.html',
  styleUrls: ['./car-rent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarRentComponent implements OnInit {
   id=0
   destination=''
   carName=''
   rideDuration=0
   fromDate=''
   returnOn=''
   pricePerHour=0
   totalRent=0
   fromTime=''
   pricePerMin=0
   constructor(private activatedRoute:ActivatedRoute,private modal:NgbModal,private toastr:ToastrService,private service:BookedcarService) {
    //this.generatePDF();
    }

  ngOnInit(): void {
    this.pricePerMin=this.pricePerHour/60
  }

   onOk(){
     this.modal.dismissAll('Ok')
    }


title = 'pdf-viewer';



public generatePDF(): void {
  
  var data = document.getElementById('contentToConvert');
      html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save(`car-rent${this.id}.pdf`); // Generated PDF
    });


}


}
