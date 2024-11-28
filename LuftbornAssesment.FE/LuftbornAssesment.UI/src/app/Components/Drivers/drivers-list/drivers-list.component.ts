import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/Models/Driver.model';
import { DriversService } from 'src/app/Services/drivers.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit{
  Drivers_ : Driver[]=[];
  constructor(private _driversServices:DriversService){}

  Delete_Driver(id: any) { 
    this._driversServices.DeleteDriver(id)
    .subscribe(aa => { this._driversServices.GetAllDrivers()
      .subscribe(aaa=> { this.Drivers_= aaa })}) } 

  ngOnInit(): void {
    this._driversServices.GetAllDrivers()
    .subscribe({
      next:(_drivers)=>{
        this.Drivers_= _drivers;
        console.log(_drivers);
      },
      error:(response)=>{
        console.log(response);
      }
  })
  }

}
