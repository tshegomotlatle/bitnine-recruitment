import { Component } from '@angular/core';

@Component({
  selector: 'bitnine-recruitment-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent {
  date = new Date();
  hours = this.date.getHours();
  hoursStr = this.date.getHours().toString();
  minutes = this.date.getMinutes();
  minutesStr = this.date.getMinutes().toString();
  second = this.date.getSeconds();
  secondStr = this.date.getSeconds().toString();
  zone = 'AM';

  constructor() {
    window.setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.second = this.date.getSeconds();
    this.hoursStr = this.date.getHours().toString();
    this.minutesStr = this.date.getMinutes().toString();
    this.secondStr = this.date.getSeconds().toString();
    
    if (this.hours < 10) {
      this.hoursStr = '0' + this.hours.toString();
    }
    if (this.minutes < 10) {
      this.minutesStr = '0' + this.minutes.toString();
    }
    if (this.second < 10) {
      this.secondStr = '0' + this.second.toString();
    }
    if (this.hours > 12) {
      this.zone = 'PM';
    }
    console.log(this.hoursStr);
    console.log(this.minutesStr);
    console.log(this.secondStr);
    
  }
}
