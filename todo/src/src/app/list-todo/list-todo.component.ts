import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../service/firebase.service';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

export interface todo { name: string; date: Date}
export interface TodoId extends todo { id: string; }
//To do class parameters

export class ToDo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date

  ){

  }
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  // array fo todo data
  todos = [];

  message:String
  //  todoCollection: AngularFirestoreCollection<any>;
  private todoCollection: AngularFirestoreCollection<todo>;
  // todos: Observable<TodoId>

  constructor(
    private ToDoService:TodoDataService,
    private firebase : FirebaseService,
    private readonly afs: AngularFirestore,
    private router:Router
  ) { }

  ngOnInit() {
    this.firebase.getData()
    .subscribe(res=>{
      this.todos = res;

      for(let i  = 0; i< res.length; i++){
        console.log(new Date(res[i].date))
      }
      console.log(res)
    }) // calls the retrieve method
  }


  // // Delete Button
  deleteTodo(id){
    this.firebase.delete(id);
    this.message = 'Deleted todo';
  }

  // Update Button
  updateTodo(id,  ){
    console.log(`update ${id}`)
    this.router.navigate(['todos', id]);

  }
  // Update Button
  addTodo(){
    this.router.navigate(['todos', -1]);
  }
}
