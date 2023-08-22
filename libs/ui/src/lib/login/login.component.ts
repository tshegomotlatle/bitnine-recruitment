import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from 'libs/services/src/lib/user/user'
import {UserService} from 'libs/services/src/lib/user/user.service'

@Component({
  selector: 'bitnine-recruitment-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showPassword = false;
  showRegister = false;
  user : User = {} as User;

  constructor(
    private userService: UserService,
    private router : Router
  ){
    this.user = {
      name: "",
      email: "",
      id: "",
      contactNo: "",
      salt: "",
      password: "",
      surname: ""
    }
  }

  toggleShow(){
    if (this.showPassword)
    {
      this.showPassword = false;
    }
    else
    {
      this.showPassword = true;
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

  register() : void
  {
    if (this.checkUserDetails())
    {

      this.userService.createUser(this.user).subscribe(
        (res) =>{
          console.log(res);
          if (res)
          {
            alert("The user has been registered");
          }
          else
          {
            alert("There is already another account that uses the email/number");
          }
        }
      );
    }
    else
    {
      alert("Please fill in all the information");
    }
  }

  login():void{
    this.userService.login(this.user.email, this.user.password)
    .subscribe(
      async (res) =>{
        if (res) {
          alert('Logged In');
          console.log(this.user);
          
          this.userService.getJWTToken(this.user.email).subscribe(
          (res) =>{
            console.log(res);
            this.userService.setLoggedIn(res.token, this.user.email);
            this.userService.isUserLoggedIn.next(true);
            this.router.navigateByUrl("/Profile")
          });
          
          
        } else {
          alert('Wrong email/password combination');
        }
      }
    )
  }

  checkUserDetails() :boolean
  {
    console.log(this.user);
    
    if (this.user.name === "")
      return false;
    if (this.user.email === "")
      return false;
    if (this.user.password === "")
      return false;
    if (this.user.surname === "")
      return false;
    if (this.user.contactNo === "")
      return false;
    else
      return true;
  }
}
