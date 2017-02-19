import { Component } from '@angular/core';
import { Project } from '../models/project.model' ;
import { ProjectListComponent } from '../project/project-list.component';

@Component({
  moduleId: module.id,
  selector: 'my-project-board',
  templateUrl: 'project-board.component.html',
  styleUrls: ['../../styles.css']
})
export class ProjectBoardComponent {
  userName = 'Rama';
  currentProject :Project;
  
  onProjectStarted(project:Project){
    this.currentProject = project;
    console.log(`Current Project: ${project}`);
  }
  
}


 