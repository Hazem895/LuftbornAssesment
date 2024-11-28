import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriversListComponent } from './Components/Drivers/drivers-list/drivers-list.component';
import { AddDriversComponent } from './Components/Drivers/add-drivers/add-drivers.component';
import { FormsModule } from '@angular/forms';
import { EditDriverComponent } from './Components/Drivers/edit-driver/edit-driver.component';

@NgModule({
  declarations: [
    AppComponent,
    DriversListComponent,
    AddDriversComponent,
    EditDriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
