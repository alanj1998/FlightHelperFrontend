import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetDataFromLoginService {

  private url : string= "http://data.flighthelper.eu/checkLogin.php?email=";

  constructor(private http:HttpClient) { }

  GetAirports(email: string, password: string) : Observable<ILoginDetails>{
    return this.http.get<ILoginDetails>(this.url + email + '&password=' + password);
  }
}