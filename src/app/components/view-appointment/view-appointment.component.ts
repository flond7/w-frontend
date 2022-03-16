import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.sass']
})
export class ViewAppointmentComponent implements OnInit {

  appointmentId: any;
  appointment = {
    appointmentDay: null,
    appointmentPlace: "Pordenone",
    personOne: "",
    personTwo: "",
    volunteer: "",
    report: ""
  }
persons = [
  {name: "Maria Elena", surname: "Asadasdasdcaeea", mail:""},
  { name: "Maria Elena", surname: "Asadasdasdcaeea", mail: "" },
  { name: "Maria Elena", surname: "Asadasdasdcaeea", mail: "" },
  { name: "Maria Elena", surname: "Asadasdasdcaeea", mail: "" }
]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.appointmentId = params['id'];
    });
  }

}
