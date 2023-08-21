import { Component } from '@angular/core';

@Component({
  selector: 'bitnine-recruitment-palindrone',
  templateUrl: './palindrone.component.html',
  styleUrls: ['./palindrone.component.scss'],
})
export class PalindroneComponent {
    word  = "";
    reverse  = "";
  palindroneStatus = false;
  palidrone(){
    this.word = this.word.toLowerCase()
    const wordArr = this.word.split("");
    const reverseArr = wordArr.reverse();
    this.reverse = reverseArr.join("");
    if (this.reverse == this.word)
      this.palindroneStatus = true;
    else
      this.palindroneStatus = false;
  }
}
