import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';

import { ProjectComponent } from './project.component';
import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './project-list.component';

import {ProjectService} from '../models/project.service';

import { ProjectsRoutingModule , routedComponents } from './projects-routing.module';


@NgModule({
    imports: [CommonModule,FormsModule,ProjectsRoutingModule],
    exports: [],
    declarations: [routedComponents],
    providers: [ProjectService],
})
export class ProjectsModule { }

 