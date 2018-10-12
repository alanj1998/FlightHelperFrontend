import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  clock: string;
  constructor() {
    this.getTime();
    setTimeout(() => {
      this.getTime();
    }, 20000);
  }

  ngOnInit() {
  }

  getTime(){
    let date = new Date();
      let minutes = '';
      let hours = '';

      
      if(date.getMinutes() < 10)
        minutes = '0' + date.getMinutes();
      else
        minutes = date.getMinutes().toString();

      if(date.getHours() < 10)
        hours = '0' + date.getHours;
      else
        hours = date.getHours().toString();

      this.clock = hours + ':' + minutes;
  }

}
