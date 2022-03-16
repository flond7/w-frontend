import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-appointment-list',
  templateUrl: './view-appointment-list.component.html',
  styleUrls: ['./view-appointment-list.component.sass']
})
export class ViewAppointmentListComponent implements OnInit {
  appointments = [
    { id: 1, contact: "direct", duration: "1:30", meetingType: "Assistenza / Ascolto", path: "p1", appointmentDay: "12-12-2020", appointmentPlace: "Pordenone", personOne: "Maria Elena Tagliapietra", personTwo: "Maria Elena Tagliapietra", volounteer: "", report: "" },
    { id: 2, contact: "web", duration: "1:30", meetingType: "Assistenza legale", path: "p1", appointmentDay: "12-10-2022", appointmentPlace: "Spilimbergo", personOne: "Maria Elena Tagliapietra", personTwo: "Maria Elena Tagliapietra", volounteer: "", report: "TEST" },
    { id: 3, contact: "phone", duration: "1:30", meetingType: "Assistenza legale", path: "p1", appointmentDay: "12-11-2022", appointmentPlace: "Pordenone", personOne: "Maria Elena Tagliapietra", personTwo: "Maria Elena Tagliapietra", volounteer: "", report: "TEST" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
