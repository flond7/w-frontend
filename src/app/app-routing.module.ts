import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAppointmentListComponent } from './components/view-appointment-list/view-appointment-list.component'
import { ViewAppointmentComponent } from './components/view-appointment/view-appointment.component'

const routes: Routes = [
  { path: 'list-appointments', component: ViewAppointmentListComponent },
  { path: 'appointment', component: ViewAppointmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
