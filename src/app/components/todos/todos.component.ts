import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import Todo from "../../models/Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})


export class TodosComponent implements OnInit {
  TODO_KEY = "TODO_KEY"
  todos: Todo[]
  storage = new LocalStorageService()
  inputTodo = ""
  
  constructor() {  }

  ngOnInit(): void { 
    this.todos = this.storage.get(this.TODO_KEY) || [];
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo = ""
    this.storage.set(this.TODO_KEY, this.todos)
  }
  
  deleteTodo(id) {
    this.todos = this.todos.filter((todo, i) => i != id)
    this.storage.set(this.TODO_KEY, this.todos)
  }
  
  toggleDone(id) {
    this.todos = this.todos.map((todo, i) => {
      if (i == id) todo.completed = !todo.completed
      return todo
    })
    this.storage.set(this.TODO_KEY, this.todos)
  }

}
