import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirebaseService } from '../service/firebase.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  constructor(public fb: FormBuilder, public authService: FirebaseService ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  tryRegister(value){
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }


}
