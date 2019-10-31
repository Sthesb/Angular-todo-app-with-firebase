import { Component, OnInit } from '@angular/core';
import { HardcodedAunthenticationService } from '../service/hardcoded-aunthentication.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn : boolean = false;
  constructor(private HardcodedAunthenticationService
    : HardcodedAunthenticationService ) { }

  ngOnInit() {
    this.isUserLoggedIn = 
    this.HardcodedAunthenticationService.isUserLoggedIn();
  }

}
