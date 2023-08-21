import { Component } from '@angular/core';

@Component({
  selector: 'bitnine-recruitment-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showPassword = false;
  passwordShow = "password"
  showRegister = false;
  email = "";
  password = "";

  constructor(){

  }

  toggleShow(){
    if (this.showPassword)
    {
      this.showPassword = false;
      this.password = "password";
    }
    else
    {
      this.showPassword = true;
      this.password = "text";
    }
  }

  toggleRegister()
  {
    if (this.showRegister)
    {
      this.showRegister = false;
    }
    else
    {
      this.showRegister = true;
    }
  }
}
