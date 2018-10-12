import { Component, OnInit } from '@angular/core';
import { PassFlightSharedService } from '../../services/pass-flight-shared.service';

@Component({
  selector: 'dahsboard',
  templateUrl: './dahsboard.component.html',
  styleUrls: ['./dahsboard.component.css']
})
export class DahsboardComponent implements OnInit {
  get Flights(): IFlight[]{
    return this._getFlights.flights;
  }

  set Flights(value: IFlight[]){
    this._getFlights.flights = value;
  }
  constructor(private _getFlights: PassFlightSharedService) { }

  ngOnInit() {
  }

}
