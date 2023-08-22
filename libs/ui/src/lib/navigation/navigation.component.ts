import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { authGaurd } from 'libs/services/src/lib/auth/auth.guard';
import { UserService } from 'libs/services/src/lib/user/user.service';

@Component({
  selector: 'bitnine-recruitment-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  showSearchBar = false;
  showLogout = false;
  isLoggedIn = false;

  constructor(private userService: UserService, private router: Router) {
    this.userService.isUserLoggedIn.subscribe((value) => {
      this.isLoggedIn = value;
    });

    if (this.userService.checkIfLogged()) {
      this.isLoggedIn = true;
    }
    // console.log();
  }

  toggleSearchBarShow(): void {
    if (this.showSearchBar) this.showSearchBar = false;
    else this.showSearchBar = true;
  }

  signout() {
    console.log('signing out');

    this.userService.clearTokens();
    this.userService.isUserLoggedIn.next(false);
    this.router.navigateByUrl('/Login');
  }

  goToGit() {
    window.open('https://github.com/bitnine-oss/agensgraph');
  }

  goToYou() {
    window.open(
      'https://www.youtube.com/channel/UCBJNYamALEqrfxiOCgYyP2g/featured?view_as=subscriber'
    );
  }

  goToLinked() {
    window.open('https://www.linkedin.com/company/bitnineglobal/');
  }
  
  goToFB(){
    window.open("https://www.facebook.com/bitninesns/");
  }
  
  goToBlog(){
    window.open('https://blog.naver.com/bitnine9');
  }
}

