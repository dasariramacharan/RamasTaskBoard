import { Component, Input } from '@angular/core';
import {Project} from '../models/project.model'

@Component({
  moduleId: module.id,
  selector: 'my-project',
  templateUrl: 'project.component.html'
})
export class ProjectComponent {
  @Input() project : Project;
}

 