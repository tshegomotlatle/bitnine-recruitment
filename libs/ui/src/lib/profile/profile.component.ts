import { Component, OnInit } from '@angular/core';
import { User } from 'libs/services/src/lib/user/user';
import { UserService } from 'libs/services/src/lib/user/user.service';

@Component({
  selector: 'bitnine-recruitment-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User = {} as User;
  showPassword = false;

  constructor(
    private userService : UserService
  ){}

  ngOnInit(): void {
      this.userService.getUser(this.userService.getLoggedInEmail() || "").subscribe(
        (res) =>{
          console.log(res.user);
          
          this.user = res.user;
        }
      )
  }

  toggleShow() {
    if (this.showPassword) {
      this.showPassword = false;
    } else {
      this.showPassword = true;
    }
  }

  update(){

  }
}
