import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAunthenticationService } from '../service/hardcoded-aunthentication.service';
import { FirebaseService } from '../service/firebase.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // login details
  loginForm: FormGroup;
  errorMessage = 'Invalid Username or Password';
  invalidLogin = false
  email: string;
  password: string;
  successMessage: string;
  //Router
  //Router dependancy injection
  constructor(
    private fb: FormBuilder,
    private firebase : FirebaseService,
    private router: Router,
    private HardcodedAunthenticationService: HardcodedAunthenticationService) { }

  ngOnInit() {
    
  }

  handleLogin(){

    let user = this.firebase.login(this.email, this.password)
    .then(res => {
      console.log(res);
      this.successMessage = "Logged In";
      return this.router.navigate(['logged']);
      this.invalidLogin = false;
    }, error =>{
      this.errorMessage;
      this.invalidLogin = true;
    })
  }

}
