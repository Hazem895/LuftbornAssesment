import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Driver } from 'src/app/Models/Driver.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
baseApiUrl : string = environment._baseApiUrl;

  constructor(private http:HttpClient) { }

  GetAllDrivers():Observable<Driver[]>{
    return this.http.get<Driver[]>(this.baseApiUrl+'/api/Drivers');
  }

  AddNewDriver(addDriverReq:Driver):Observable<Driver>{
    addDriverReq.id=0;
    addDriverReq.driverId='00000000-0000-0000-0000-000000000000';
    return this.http.post<Driver>(this.baseApiUrl + '/api/Drivers', addDriverReq);
  }

  GetDriverById(id:string):Observable<Driver>{
    return this.http.get<Driver>(this.baseApiUrl+'/api/Drivers/'+id);
  }

  UpdateDriverData(UpdateDriverReq:Driver):Observable<Driver>{
    return this.http.put<Driver>(this.baseApiUrl + '/api/Drivers/'+ UpdateDriverReq.driverId,UpdateDriverReq);
  }

  DeleteDriver(id:string):Observable<Driver>{
    return this.http.delete<Driver>(this.baseApiUrl+'/api/Drivers/'+id);
  }
}
