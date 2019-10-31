import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {

  constructor(public message:string) {
    
   }
  
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(
    private http:HttpClient
  ) { }
  // Gets welcome service from the restful-web-service 
  executeHelloWorldBeanService(){
   return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    
  }

  // http://localhost:8080/hello-world/path-variable/${name}
  
  executeHelloWorldServicePathVariable(name){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
     
     //console.log("Excecute Hello World Bean Service")

   }
   


  //  Access to XMLHttpRequest at 'http://localhost:8080/hello-world-bean' 
  // from origin 'http://localhost:4200' has been blocked by CORS policy: 
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.


  



  
}
