import { Component, OnInit } from '@angular/core';
import { ToDo } from '../list-todo/list-todo.component';
import { TodoDataService } from '../service/data/todo-data.service';

import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  description:string=null;
  targetDate: string=null;
  id:string
  todo: ToDo


  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router:Router,
    private fs : FirebaseService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    // this.todo = new ToDo(this.id,'',false, new Date());
    // if(this.id != -1){
    //   this.todoService.retrieveTodo('springboot', this.id)
    //   .subscribe(
    //     data => this.todo = data
    //   )
    // }
    
  }

  // 
  saveTodo(){
    if(this.id === "-1" ){
      // Create Todo
      // this.todoService.createTodo('spingboot', this.id,this.todo ).subscribe(
      //   data => {
      //     console.log(data)
      //     this.router.navigate(['todos'])
      //   }
        this.fs.addItem(this.description, this.targetDate);
      this.router.navigate(['/logged/todos']);
    }else{
      // this.todoService.updateTodo('spingboot', this.id, this.todo).subscribe(
      //   data => {
      //     console.log(data)
      //     this.router.navigate(['todos'])
      //   }
      // )

      this.fs.updateTodo(this.id, this.description, this.targetDate);
      console.log(new Date(this.targetDate));
      this.router.navigate(['/logged/todos']);
    }

    
  }
}
