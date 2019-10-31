import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { RegisterComponent } from './register/register.component';
import { LogedInComponent } from './loged-in/loged-in.component';

//Routes
const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'logged', component:LogedInComponent, children:[
    { path: 'welcome', component:WelcomeComponent},
    { path: 'todos', component:ListTodoComponent}, 
  ]},
  { path: '**', component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
