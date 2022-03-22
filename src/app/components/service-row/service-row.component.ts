import { Component, OnInit } from '@angular/core';
import { LIST_SERVICE } from 'src/app/constants';

@Component({
  selector: 'app-service-row',
  templateUrl: './service-row.component.html',
  styleUrls: ['./service-row.component.sass']
})
export class ServiceRowComponent implements OnInit {

  servicesList: any;
  servicesValues = {};
  servicesOne: any; servicesTwo: any;
  constructor() { }


  ngOnInit(): void {
    this.servicesList = LIST_SERVICE;
    //divide list in 2 to show it in 2 columns in template
    const half = Math.ceil(this.servicesList.length / 2);
    this.servicesOne = this.servicesList.slice(0, half)
    this.servicesTwo = this.servicesList.slice(-half+1)
    //initialize empty service
    this.servicesList.map(e => {
      this.servicesValues[e.name] = "";
    });
  }

  setServiceValue(serviceName, v) {
    if (this.servicesValues[serviceName] === v) {
      this.servicesValues = ''
    } else {
      this.servicesValues[serviceName] = v;
    }
  }
}
