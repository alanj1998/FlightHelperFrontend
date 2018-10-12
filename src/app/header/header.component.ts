import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _flights:IFlight[];
  @Input() set Flights(value: IFlight[]){
    if(value != undefined)
    {
      this._flights = value;
      this.currentFlight = this.GetCurrentFlight();
    }
  };
  currentFlight: IFlight;
  constructor() {
  }

  ngOnInit() {
  }

  GetCurrentFlight() : IFlight{
    return this._flights.sort((x,y) => {
      let prev = new Date(x.Departure_Time);
      let next = new Date(y.Departure_Time);

      if(prev < next)
        return -1;
      else if(prev > next)
        return 1;
      else
        return 0;
    })[0];
  }
}
