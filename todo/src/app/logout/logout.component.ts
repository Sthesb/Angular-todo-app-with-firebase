import { Component, OnInit } from '@angular/core';
import { HardcodedAunthenticationService } from '../service/hardcoded-aunthentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private HardcodedAunthenticationService: HardcodedAunthenticationService) { }

  ngOnInit() {
    this.HardcodedAunthenticationService.logout();
  }

}
