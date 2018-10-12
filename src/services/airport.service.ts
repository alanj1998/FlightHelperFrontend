import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AirportData } from '../model/airport.class';

@Injectable()
export class AirportService {

  private url : string= "http://data.flighthelper.eu/getAirports.php?letters=";

  constructor(private http:HttpClient) { }

  GetAirports(letters) : Observable<IAirport[]>{
    return this.http.get<IAirport[]>(this.url + letters);
  }
}
