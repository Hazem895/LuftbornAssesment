import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/Models/Driver.model';
import { DriversService } from 'src/app/Services/drivers.service';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {

  DriverData:Driver={
    id: '',
    driverId: '',
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: ''
  }

constructor(private route:ActivatedRoute,private DriverService:DriversService,private router:Router){}

UpdateDriver(){
  console.log(this.DriverData);
  this.DriverService.UpdateDriverData(this.DriverData)
  .subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['']);
      }

 
    })
 }

 
ngOnInit(): void {
  console.log('update')
  this.route.paramMap.subscribe({
    next: (params) =>{
     const id = params.get('id');
     console.log(id);
     if(id){
      //call api
      this.DriverService.GetDriverById(id)
      .subscribe({
        next:(response)=>{
            this.DriverData = response;
        }
      })
     }
    }
  })
}
}
