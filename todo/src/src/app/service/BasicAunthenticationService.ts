// import { Injectable } from '@angular/core';
// @Injectable({
//   providedIn: 'root'
// })
// export class BasicAunthenticationService {
//   constructor() { }
//   authenticate(username, password) {
//     //console.log('before' + this.isUserLoggedIn());
//     if (username === 'Sthembiso' && password === '12345') {
//       sessionStorage.setItem('authenticatedUser', username);
//       //console.log('after' + this.isUserLoggedIn());
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
//   isUserLoggedIn() {
//     let user = sessionStorage.getItem('authenticatedUser');
//     return !(user === null);
//   }
//   logout() {
//     sessionStorage.removeItem('authenticatedUser');
//   }
// }
