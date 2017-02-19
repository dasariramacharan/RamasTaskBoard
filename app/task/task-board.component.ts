import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Task } from '../models/task.model' ;
import { Project } from '../models/project.model';

@Component({
  moduleId: module.id,
  selector: 'my-task-board',
  templateUrl: 'task-board.component.html',
  styleUrls: ['../../styles.css']
})
export class TaskBoardComponent implements OnChanges {
  @Input() project : Project;
  currentTask :Task;

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log("SimpleChanges in task board called with below changes");
    console.log(changes);
  }


  onTaskStarted(task:Task){
    this.currentTask = task;
  }
  
}


 