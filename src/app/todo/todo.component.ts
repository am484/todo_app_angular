import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  @Input() todo: Todo = { task: "Angular", isDone: false };
  @Output() todoDone = new EventEmitter<Todo>;
  @Output() todoDelete = new EventEmitter<Todo>;

  doneHandler(todo: Todo) {
    this.todoDone.emit(todo);
  }

  deleteHandler(todo: Todo) {
    this.todoDelete.emit(todo);
  }
}
