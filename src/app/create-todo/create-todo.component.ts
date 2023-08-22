import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Validators
import { Todo } from '../../shared/todo.interface';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
})
export class CreateTodoComponent {
  todoForm: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required], // Add Validators.required
      description: ['', Validators.required], // Add Validators.required
    });
  }

  createTodo(): void {
    if (this.todoForm.valid) {
      const todoData: Todo = {
        id: Date.now(),
        title: this.todoForm.value.title,
        description: this.todoForm.value.description,
        completed: false,
      };

      this.todoService.addTodo(todoData);
      this.todoForm.reset();
    }
  }
}
