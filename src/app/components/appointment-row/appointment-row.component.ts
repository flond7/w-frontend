import { Component, OnInit, Input } from '@angular/core';
import { faWifi, faPersonDress, faPhone, faPencil, faSquareXmark, faSquareCheck, faCopy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-appointment-row',
  templateUrl: './appointment-row.component.html',
  styleUrls: ['./appointment-row.component.sass']
})
export class AppointmentRowComponent implements OnInit {

  faWifi = faWifi;
  faPersonDress = faPersonDress;
  faPhone = faPhone;
  faPencil = faPencil;
  faSquareCheck = faSquareCheck;
  faSquareXmark = faSquareXmark;
  faCopy = faCopy;

  @Input() appointments: any;

  constructor() { }

  ngOnInit(): void { }

  sortArray(arrayToSort: any, criteria: string, isItADate: boolean) {
    if (isItADate === true) {
      console.log('inside');
      arrayToSort.sort((a: any, b: any) => a[criteria] - b[criteria])
    } else {
          console.log('outside');
      arrayToSort.sort((a: any, b: any) => (a[criteria] > b[criteria]) ? 1 : ((b[criteria] > a[criteria]) ? -1 : 0))

    }

    //arrayToSort.sort((a: any, b: any) => (a[criteria] > b[criteria]) ? 1 : ((b[criteria] > a[criteria]) ? -1 : 0))
  }



  seeAppointment(appointmentId: any) {
    console.log(appointmentId)
  }

}
