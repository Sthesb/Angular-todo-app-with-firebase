import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeService } from '../service/data/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  message = 'Error 45: Something went wrong'  // print out error message when something goes wrong
  welcomMessageFromService:String
  name = ''
  constructor(
    private route:ActivatedRoute,
    private service: WelcomeService) { }

  ngOnInit() {
    // Compling error message 
    console.log(this.message)
    //picking up the route name
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }
    
  getWelcomeMessage(){
    // Executes Welcome Service to the console
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessFullResponce(response),
      // error => this.handleErrorResponse(error) 
      );
     console.log('last line of getWelcomeMessage')
  }

  handleSuccessFullResponce(response){
    this.welcomMessageFromService = response.message
    // console.log(response);
    // console.log(response.message );
  }
  
  handleErrorResponse(error){
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);

    this.welcomMessageFromService = error.error.message
  }
}
