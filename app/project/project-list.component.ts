import { Component,Output,EventEmitter,Input,OnInit } from '@angular/core';

import {Project} from '../models/project.model'
import {ProjectService } from '../models/project.service'
import {ProjectComponent} from './project.component'

@Component({
  moduleId: module.id,
  selector: 'my-project-list',
  templateUrl: 'project-list.component.html',
  styleUrls:[`./project-list.component.css`]
})
export class ProjectListComponent implements OnInit {
  
  @Output() projectStarted = new EventEmitter<Project>();
  @Input() projectId: number;
  
   selectedProject :Project;
   projects : Project[] ;
    
   constructor(private projectService: ProjectService) {
     console.log('project list constructor called');
   } 
    
    ngOnInit(){
      this.projectService.getProjects()
           .subscribe(projects => this.projects = projects);
           console.log(this.projects);
    }
      
    select( project: Project) {
      this.selectedProject = project;
    }
    
    startProject() {
      this.projectStarted.emit(this.selectedProject);
    };
}
