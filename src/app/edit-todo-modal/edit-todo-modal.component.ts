import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../../shared/todo.interface';

@Component({
  selector: 'app-edit-todo-modal',
  templateUrl: './edit-todo-modal.component.html',
  styleUrls: ['./edit-todo-modal.component.css']
})
export class EditTodoModalComponent {
  editedTodo: Todo;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { editedTodo: Todo },
    private dialogRef: MatDialogRef<EditTodoModalComponent>
  ) {
    this.editedTodo = { ...data.editedTodo };
  }

  saveEditedTodo(): void {
    this.dialogRef.close(this.editedTodo);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
  
}
