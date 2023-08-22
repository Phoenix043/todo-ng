// todo-list.component.ts

import { Component } from '@angular/core';
import { Todo } from '../../shared/todo.interface';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getAllTodos();
  }
}
