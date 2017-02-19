import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Task } from '../models/task.model';
import { TaskService } from '../models/task.service';


@Component({
  moduleId: module.id,
  selector: 'my-task',
  templateUrl: 'task.component.html'
})
export class TaskComponent implements OnInit{
  @Input() task: Task = new Task();

  private id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService : TaskService) { }
   

  ngOnInit() {
    if (!this.task) {
      // Could use a snapshot here, as long as the parameters do not change.
      // This may happen when a component is re-used.
      // this.id = +this.route.snapshot.params['id']; // snapshot method of reading route params
      this.route.params
        .map(params => params["id"])  //observable method reading route params
        .do(id => this.id = +id)
        .subscribe(id => this.getTask());
    }
  }

  private getTask() {
    this.taskService.getTask(this.id)
                    .subscribe((task:Task) =>this.setEditTask(task));
  }

  private gotoTasks() {
    let route = ["/tasks"];
    this.router.navigate(route);
  }

  private setEditTask(task: Task) {
    if (task) {
      this.task = task;
    } else {
      //Add Mode
      this.id = undefined;
      //console.log('No edit task. Redirected to go tasks.');
      //this.gotoTasks();
    }
  }

  private onAddTask() {
    console.log('todo call add Task..');
    this.gotoTasks();
  }

  private onUpdateTask() {
    console.log('todo call update Task..');
    this.gotoTasks();
  }
}

 