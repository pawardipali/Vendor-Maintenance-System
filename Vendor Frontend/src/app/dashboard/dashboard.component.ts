import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';
import { GetVendorService } from '../get-vendor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vendorName:any;
  vendorDetail:any;
  rating:any;
  
  constructor(private api:GetVendorService){

  }
canvas: any;
    ctx: any;
    @ViewChild('mychart') mychart:any;
  ngOnInit(){
    this.api.getVendors().subscribe((data)=>{
      var vendorArray=<any> [];
      var ratingArray=<any> [];
     
      console.log("length",data.vendor.length);
      for(var i=0;i<data.vendor.length;i++){
        this.vendorName=data.vendor[i]._source.name
        this.rating=data.vendor[i]._source.ratings
        vendorArray.push(this.vendorName);
        ratingArray.push(this.rating);
       console.log("vendor name",vendorArray);
       console.log("rating",ratingArray);
        //console.log("----",data.vendor[i]._source);
        //console.log("****",data);
      }
      //console.log("vendorrrrrrrrrr",vendorArray);
      console.log("data",data.vendor[0]._source);
      
      this.canvas = this.mychart.nativeElement;
      this.ctx = this.canvas.getContext('2d');
console.log("vendorrrrrrrrrr",vendorArray);
      new Chart(this.ctx, {
        type: 'doughnut',
         data : {
          labels: vendorArray,
          datasets: [{
            label: 'My First Dataset',
            data: ratingArray,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(255, 205, 186)'
            ]
          }]
        }
    });

    })

  }
 /* canvas: any;
    ctx: any;
    @ViewChild('mychart') mychart:any;*/
    

    /*chart() {
      this.canvas = this.mychart.nativeElement;
      this.ctx = this.canvas.getContext('2d');
console.log("vendorrrrrrrrrr",vendorArray);
      new Chart(this.ctx, {
        type: 'doughnut',
         data : {
          labels: vendorArray,
          datasets: [{
            label: 'My First Dataset',
            data: ratingArray,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(255, 205, 186)'
            ]
          }]
        }
    });
    }*/

}
