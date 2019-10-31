import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { reject } from 'q';
import { resolve } from 'url';
import { TodoDataService } from './data/todo-data.service';


export interface Item { name: string; date: string }
export interface todo { name: string; description: string; }
export interface TodoId extends todo { id: string; }

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  private itemsCollection: AngularFirestoreCollection<Item>;
  private firbaseData: AngularFirestore;
  items: Observable<Item[]>;
  users: Observable<firebase.User>;
  router: any;
  todoCollection: AngularFirestoreCollection<any>;
  todo: Observable<any[]>;


  constructor(private readonly afs: AngularFirestore,
     private firebaseAuth: AngularFireAuth) {
    this.itemsCollection = afs.collection<Item>('todos');
    // .valueChanges() is simple. It just returns the
    // JSON data without metadata. If you need the
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. See the addItem()
    // method below for how to persist the id with
    // valueChanges()
    this.items = this.itemsCollection.valueChanges();
    this.users = firebaseAuth.authState;
  }

  // Register

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  // Login
  login(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }, error => reject());
    })

  }

  // Add todo to firebase
  addItem(name: string, date: any) {
    const id = this.afs.createId();
    const item: Item = { name, date };
    this.itemsCollection.doc(id).set(item);
    console.log(id);
  }

  // Getting the todos from firebase
  getData(): Observable<any[]> {
    return this.afs.collection<any>('todos')
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    )
  }

  // Deleting Todo
  delete(id:string){
    this.afs.doc("todos/"+id)
    .delete();
  }


  // updating todo
  updateTodo(id: string, name: string, date: string): void {
    console.log(name)
    this.afs.doc<Item>('todos/' + id)
      .set({name: name, date: date });    
  }
 




}
