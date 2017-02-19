import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import { CONFIG } from '../config';
let tasksUrl = CONFIG.baseUrls.tasks;

import { Task } from './task.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TaskService{
  
  constructor(private http:Http){}

  getAllTasks() {
    return this.http
      .get(tasksUrl)
      .map((response: Response) => <Task[]>response.json().data);
  }

  getTask(id: number) {
    return this.getAllTasks()
      .map(tasks => tasks.find(task => task.id === id));
  }
  
  getTasks(projectId: number, searchText? : string) {
    return this.http
      .get(tasksUrl)
      .map((response: Response) => {
        let projectTasks = <Task[]>response.json().data
        if (!searchText) {
          return projectTasks;
        }
        return projectTasks.filter(t => t.name.toLowerCase().includes(searchText.toLowerCase()));
      })
      .do(data => {
        //below code works
        //console.log('vehicle search result: (see below)');
        //console.log(data);
      })
      .catch(this.handleError);
  }

  private handleError(error:Response) {
    console.log(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

}
