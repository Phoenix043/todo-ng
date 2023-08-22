import { Component, Input } from '@angular/core';
import { Todo } from '../../shared/todo.interface';
import { TodoService } from '../../shared/todo.service';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { EditTodoModalComponent } from '../edit-todo-modal/edit-todo-modal.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  isEditMode: boolean = false;

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog
  ) {}

  markAsCompleted(): void {
    this.todoService.markTodoAsCompleted(this.todo);
  }

  editTodo(): void {
    this.isEditMode = true;
    const dialogRef = this.dialog.open(EditTodoModalComponent, {
      data: { editedTodo: { ...this.todo } }
    });
  
    dialogRef.afterClosed().subscribe((result: Todo) => {
      if (result) {
        console.log(result)
        this.todo = result; // Update the todo with edited values
        this.todoService.editTodo(result); // Update the todo in the service
      }
      this.isEditMode = false; // Close edit mode after modal is closed
    });
  }
  
  

  deleteTodo(): void {
    this.todoService.deleteTodo(this.todo);
  }
}
