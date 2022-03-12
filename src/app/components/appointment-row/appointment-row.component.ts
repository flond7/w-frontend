import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-row',
  templateUrl: './appointment-row.component.html',
  styleUrls: ['./appointment-row.component.sass']
})
export class AppointmentRowComponent implements OnInit {
  appointments = [
   {id: 1, meetingType: "direct", path: "p1", appointmentDay: "12-12-2022", appointmentPlace: "Maniago", personOne: "One", personTwo: "Two", volounteer: ""},
   {id: 2, meetingType: "direct", path: "p1", appointmentDay: "12-12-2022", appointmentPlace: "Maniago", personOne: "One", personTwo: "Two", volounteer: "" }
 ]

  constructor() { }

  ngOnInit(): void {
  }

  seeAppointment(appointmentId: any) {
    console.log(appointmentId)
  }

}
