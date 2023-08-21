import { Component } from '@angular/core';

@Component({
  selector: 'bitnine-recruitment-missing-number',
  templateUrl: './missing-number.component.html',
  styleUrls: ['./missing-number.component.scss'],
})
export class MissingNumberComponent {
  value = 50;
  missingArray : number [] = [];
  missingList = "";
  missingNumber = "";

  generate(){
    for (let k = 1; k <= this.value; k++) {
      this.missingArray.push(k)
    }
    this.missingArray.splice((Math.random() * this.value), 1)
    this.missingList = this.missingArray.join(", ")
  }

  findMissing(){
    for (let k = 0; k < this.value; k++) {
      
    }
  }
}
