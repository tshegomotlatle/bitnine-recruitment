import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class authGaurd implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const token = this.userService.getLoggedInToken()
    const decoded : {user: string, iat: string} = jwt_decode(token || "") 
    const email = this.userService.getLoggedInEmail();

    if (decoded.user == email)
      return true;
    else
    {
      return false;
      this.userService.clearTokens();
      this.router.navigateByUrl("/Login");
    }

    // return true;
  }
}
