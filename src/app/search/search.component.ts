import { Component, OnInit } from '@angular/core';
import { AirportService } from '../../services/airport.service';
import { AirportData } from '../../model/airport.class';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  airports: AirportData[] = new Array<AirportData>();
  search: string = "";
  _timeout: any = null;

  constructor(private _getAirports: AirportService) {
  }

  ngOnInit() {
  }

  GetAirports() {
    if (this.search.length > 3) {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
      this._timeout = setTimeout(() => {
        this._getAirports.GetAirports(this.search)
          .subscribe(response => {
            let arr = new Array<AirportData>();
            let i = 0;

            if (response != null) {
              response.forEach(element => {
                arr[i] = new AirportData(element.LocationCountryCode, element.LocationID, element.LocationAirportName, element.LocationName, element.CountryName);
                i++;
              });

              this.airports = arr;
            }

          });
      }, 500);
    }
    else{
      this.airports.length = 0;
    }
  }

  GetLetters(text: string) {
    this.search = text;
  }
}