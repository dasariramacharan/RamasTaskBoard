import { Injectable } from '@angular/core';
import { UserProfileService } from './login/login-profile.service';
import {Router, CanActivateChild,  CanActivate,  ActivatedRouteSnapshot,  RouterStateSnapshot} from '@angular/router';

@Injectable()
export class CanActivateAuthGaurd implements CanActivate, CanActivateChild{

constructor(private router: Router,
              private userProfileService : UserProfileService){};

 
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
          //currently uses the same check as the parent path  
          return this.canActivate(next, state);
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userProfileService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { redirectTo: state.url } });
    return false;
  }
}