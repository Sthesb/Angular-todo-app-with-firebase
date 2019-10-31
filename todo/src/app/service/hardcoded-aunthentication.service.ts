import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAunthenticationService {

  constructor() { }
  authenticate(username, password) {
    //console.log('before' + this.isUserLoggedIn());
    if (username === 'admin' && password === 'password'){
      sessionStorage.setItem('authenticatedUser', username);
      //console.log('after' + this.isUserLoggedIn());
      return true;
    }else{
    
      return false;
    }

     
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user=== null)
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
