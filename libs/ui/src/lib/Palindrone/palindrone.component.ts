import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'bitnine-recruitment-palindrone',
  templateUrl: './palindrone.component.html',
  styleUrls: ['./palindrone.component.scss'],
})
export class PalindroneComponent {
    word  = "";
    reverse  = "";
  palindroneStatus = false;
  output = "Enter a word to check if its a palindrone";
  symbol = "";

  constructor(private cdref: ChangeDetectorRef){

  }

  palidrone(){
    this.word = this.word.toLowerCase()
    const wordArr = this.word.split("");
    const reverseArr = wordArr.reverse();
    this.reverse = reverseArr.join("");
    if (this.word.length == 0)
    {
      console.log("here");
      
      this.palindroneStatus = true;
      this.output = "Enter a word to check if its a palindrone";
      this.symbol = "";
      this.cdref.detectChanges();
    }
    if (this.reverse == this.word)
    {
      this.palindroneStatus = true;
      this.output = "Is a palindrone!";
      this.symbol = "done";
    }
    else
    {
      this.palindroneStatus = false;
      this.output = "Is not a palindrone!";
      this.symbol = "close";
    }
  }
}
