import { Component } from '@angular/core';

export interface Todo {
  task: string,
  isDone: boolean,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  todos: Todo[] = [];

  constructor() {
    const storedTodos = localStorage.getItem("TODOS");

    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  task = '';

  doneTodo(tod: Todo) {
    this.todos.map((todo) => {
      if (todo === tod) {
        todo.isDone = !todo.isDone;
        return;
      }
    })
    localStorage.setItem("TODOS", JSON.stringify(this.todos));
  }

  deleteTodo(tod: Todo) {
    this.todos = this.todos.filter((todo) => todo != tod)
    localStorage.setItem("TODOS", JSON.stringify(this.todos));
  }

  onSubmit() {
    if (this.task.trim().length > 0) {
      this.todos.push({ task: this.task || "", isDone: false });
      this.task = ""
      localStorage.setItem("TODOS", JSON.stringify(this.todos));
    }
  }
}
