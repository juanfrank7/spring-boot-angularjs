import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-task-edit-page',
  templateUrl: './task-edit-page.component.html',
  styleUrls: ['./task-edit-page.component.css']
})
export class TaskEditPageComponent implements OnInit {
	todoForm: FormGroup;  
	constructor(public todoService: TodoService,
    public formBuilder: FormBuilder,
    public router: Router) {
  }

  ngOnInit() {

this.todoForm = this.formBuilder.group({
      description: '',
      completed: '',
      priority: ''
    });
  }

onSubmit() {
   this.todoService.create(
     this.todoForm.get('description').value,
     this.todoForm.get('priority').value,
     Boolean(this.todoForm.get('completed').value)
   );

   this.router.navigate(['/tasks']);
 }

}
