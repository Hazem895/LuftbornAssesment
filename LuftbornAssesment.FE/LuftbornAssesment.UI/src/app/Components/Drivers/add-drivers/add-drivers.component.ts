import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from 'src/app/Models/Driver.model';
import { DriversService } from 'src/app/Services/drivers.service';

@Component({
  selector: 'app-add-drivers',
  templateUrl: './add-drivers.component.html',
  styleUrls: ['./add-drivers.component.css']
})
export class AddDriversComponent  /*implements OnInit*/ {
  addDriverReq:Driver={
    id: '',
    driverId: '',
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: ''
  }
   constructor(private _driverServices:DriversService,private router:Router){}
   ngOnInit(): void {}
   
   AddDriver(){
    this._driverServices.AddNewDriver(this.addDriverReq)
    .subscribe({
        next: (_driver) => {
          this.router.navigate(['/drivers']);
        }
      })
   }
}
