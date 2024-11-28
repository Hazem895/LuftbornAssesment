import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { using } from 'rxjs';
import { AddDriversComponent } from './Components/Drivers/add-drivers/add-drivers.component';
import { DriversListComponent } from './Components/Drivers/drivers-list/drivers-list.component';
import { EditDriverComponent } from './Components/Drivers/edit-driver/edit-driver.component';
const routes: Routes = [
  {
    path:'',
    component:DriversListComponent
  },
  {
    path:'drivers',
    component:DriversListComponent
  },
  {
    path:'drivers/add',
    component:AddDriversComponent
  },
  {
    path:'drivers/edit/:id',
    component:EditDriverComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
