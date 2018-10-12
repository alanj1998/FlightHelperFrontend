import { Component, OnInit, Input } from '@angular/core';
import { GetFlightsService } from '../../services/get-flights.service';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  constructor(private getFlights : GetFlightsService) { }

  ngOnInit() {
  }

  getThoseFlights(){
    this.getFlights.getFlightData("EIDW").subscribe();
  }
}
