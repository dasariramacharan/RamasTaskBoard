import { Component,Output,EventEmitter,Input,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

import {Task} from '../models/task.model'
import {TaskService } from '../models/task.service'

@Component({
  moduleId: module.id,
  selector: 'my-task-list',
  templateUrl: 'task-list.component.html',
  styles: [`
    .tasks {list-style-type: none;}
    *.tasks li {padding: 4px;cursor: pointer;}
    li {cursor: pointer;} .error {color:red;}
  `]
  //styleUrls:[`./task-list.component.css`]
})
export class TaskListComponent implements OnInit {
  
  @Output() taskStarted = new EventEmitter<Task>();
  @Input() projectId: number;

  errorMessage: string;
  selectedTask :Task;
  tasks: Observable<Task[]>;
      constructor(private taskService:TaskService){} 
    
    ngOnInit(){
      this.searchTasks('');
    }
      
    select( task: Task) {
      this.selectedTask = task;
    }
    
    startTask() {
      this.taskStarted.emit(this.selectedTask);

    }

    searchTasks(searchText: string) {
      this.tasks = this.taskService.getTasks(this.projectId, searchText)
        .catch(err => this.handleError(err));

    }

    handleError(err: Response) {
      this.errorMessage = "Error in getting tasks";
      return Observable.throw(err);
    }
}
