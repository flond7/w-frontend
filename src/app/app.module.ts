import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentRowComponent } from './components/appointment-row/appointment-row.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewAppointmentComponent } from './components/view-appointment/view-appointment.component';
import { ViewAppointmentListComponent } from './components/view-appointment-list/view-appointment-list.component';
import { ServiceRowComponent } from './components/service-row/service-row.component';
import { AccordionRowsComponent } from './components/accordion-rows/accordion-rows.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentRowComponent,
    ViewAppointmentComponent,
    ViewAppointmentListComponent,
    ServiceRowComponent,
    AccordionRowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
