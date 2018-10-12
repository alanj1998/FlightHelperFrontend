import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class GetFlightsService {

  private url : string= "http://flightxml.flightaware.com/json/FlightXML3/AirportBoards?airport_code=";

  constructor(private http:HttpClient) { }

  getFlightData(airportCode) : Observable<IFlightAwareResponse>{
    let header = new HttpHeaders();
    //header = header.append("Authorization", "Basic " + btoa("alanj1998:4d5e8497d3ecc47709fce1db7980e4ebcb5fe740"));    
    header = header.append("Authorization", "Basic YWxhbmoxOTk4OjRkNWU4NDk3ZDNlY2M0NzcwOWZjZTFkYjc5ODBlNGViY2I1ZmU3NDA=");
    header = header.append("Content-Type", "application/json");
    header = header.append("Access-Control-Allow-Origin",  "*");
    header = header.append("Access-Control-Allow-Methods",  "POST, GET");
    return this.http.get<IFlightAwareResponse>(this.url + airportCode)
    .do(data => console.log(JSON.stringify(data)));
  }
}
