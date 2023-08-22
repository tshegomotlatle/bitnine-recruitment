import { Component } from '@angular/core';

@Component({
  selector: 'bitnine-recruitment-missing-number',
  templateUrl: './missing-number.component.html',
  styleUrls: ['./missing-number.component.scss'],
})
export class MissingNumberComponent {
  value = 50;
  missingArray : number [] = [];
  normalArray : number [] = []
  missingList = "";
  missingNumber = -1;

  generate(){
    this.missingArray = [];
    this.normalArray = [];
    for (let k = 1; k <= this.value; k++) {
      this.missingArray.push(k)
      this.normalArray.push(k)
    }
    this.missingArray.splice((Math.random() * this.value), 1)
    this.missingList = this.missingArray.join(", ")
  }

  findMissing(){
    const sum = this.normalArray.reduce((a: number, b :number) =>{
      return a + b
    },0);
    const sumValues = this.missingArray.reduce((a: number, b :number) =>{
      return a + b
    },0);
    
    this.missingNumber = sum - sumValues;
    console.log("sum :" + sum);
    console.log("sumValues :" + sumValues);
    console.log("missingNumber :" + this.missingNumber);
    
  }
}
