import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faWifi, faPersonDress, faPhone } from '@fortawesome/free-solid-svg-icons';
import { LIST_APPOINTMENT_TYPE, LIST_PEOPLE } from './../../constants';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.sass']
})
export class ViewAppointmentComponent implements OnInit {

  //font awesome icons
  faWifi = faWifi; faPersonDress = faPersonDress; faPhone = faPhone;

  //use constants list
  peopleList: any; appointmentTypeList: any;

  appointmentId: any;
  appointment = {
    nature: "person",               //options: person, web, phone
    appointmentDay: null,
    appointmentPlace: "Pordenone",  //options: Pordenone, Maniago, Sacile, Spilimbergo
    type: "Ascolto/Accoglienza",
    personOne: "",
    personTwo: "",
    volunteer: "",
    report: ""
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.appointmentId = params['id'];
    });

    this.peopleList = LIST_PEOPLE;
    this.appointmentTypeList = LIST_APPOINTMENT_TYPE;
  }

}
