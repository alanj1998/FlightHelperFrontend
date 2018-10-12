import { Component } from '@angular/core';
import { GetDataFromLoginService } from '../services/get-data-from-login.service';
import { PassFlightSharedService } from '../services/pass-flight-shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flight Helper';
  login: ILoginDetails;
  currentFlight: IFlight;

  get Flights(): IFlight[]{
    return this._sharedFlights.flights;
  }
  set Flights(value: IFlight[]){
    this._sharedFlights.flights = value;
  }

  constructor(private _loginService : GetDataFromLoginService, private _sharedFlights: PassFlightSharedService){
    this._loginService.GetAirports("banks.shane@itsligo.ie", "shane123")
                  .subscribe(response => {this.login = response; this._sharedFlights.flights = response.flights;});
  }
}
