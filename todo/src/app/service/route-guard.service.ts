import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAunthenticationService } from './hardcoded-aunthentication.service';
import { FirebaseService } from './firebase.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private HardcodedAunthenticationService: HardcodedAunthenticationService,
              // imports route attributes
              private router: Router) { }
  // ensures that user cant use any links of the application without logging in first
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.HardcodedAunthenticationService.isUserLoggedIn())
      //show all navigation links only when user is logged in
      return true;
      // routes back to the login page after logging out
      this.router.navigate(['login']);
    //hides some navigation links only when user is not logged in
    return false;
  }

}
