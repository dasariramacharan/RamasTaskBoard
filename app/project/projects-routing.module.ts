import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './project-list.component';

const routes: Routes = [
  { path: 'projects',
    component: ProjectsComponent ,
    children : [
        {path : '', component: ProjectListComponent},
        {path : ':id', component: ProjectComponent}        
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule { }

export const routedComponents = [
  ProjectComponent,
  ProjectListComponent,
  ProjectsComponent
  ];