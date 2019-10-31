import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from 'src/app/list-todo/list-todo.component';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private firebaseData: FirebaseService,
    private http: HttpClient
  ) { }


  // Gets displays data from TodoHardCoded class in restful-web-service 
  retrieveAllTodos(username){
    return this.http.get<ToDo[]>(`http://localhost:8080/users/${username}/todos`);
     
   }

   // deletes a todo record from the list coming through the url:http://localhost:8080/users/${username}/todos/${id}
   deleteTodo(username, id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  // gets an updated todo record from the list coming through the url:http://localhost:8080/users/${username}/todos/${id}
  retrieveTodo(username, id){
    return this.http.get<ToDo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  updateTodo(username, id, todo){
    return this.http.put<ToDo>(`http://localhost:8080/users/${username}/todos/${id}`, todo)
  }  

  // adds a new todo record
  createTodo(username, id, todo){
    return this.http.post<ToDo>(`http://localhost:8080/users/${username}/todos/${id}`, todo)
  }
}
