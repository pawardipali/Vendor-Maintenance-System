import { Component, OnInit } from '@angular/core';
//import { GetVendorService } from '../get-vendor.service';


@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  constructor() { }

  /*ngOnInit(): void {
    this.api.getVendors().subscribe((data)=>{
     
      console.log("length",data.vendor.length);
      for(var i=0;i<data.vendor.length;i++){
       var vendorName=data.vendor[i]._source.name
       var rating=data.vendor[i]._source.ratings
       console.log("vendor name",vendorName);
       console.log("rating",rating);
        console.log("----",data.vendor[i]._source);
      }

      console.log("data",data.vendor[0]._source);
      this.chart();

    })
  }*/

}
