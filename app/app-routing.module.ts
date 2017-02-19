import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components used for routing
//import { TaskBoardComponent } from './task/task-board.component';
import { TasksComponent} from './task/tasks.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list.component';
import { LoginComponent } from './login/login.component';

//Lazy Loading
// import { MilestoneListComponent } from './milestone/milestone-list.component';
// import { MilestoneComponent } from './milestone/milestone.component';
// import { MilestoneResolver } from './milestone/shared/milestone-resolver.service';


//moved to separate feature module and doing eagerly loading
//import { ProjectBoardComponent } from './project/project-board.component';
// import { ProjectComponent } from './project/project.component';
// import { ProjectListComponent } from './project/project-list.component';

import { PageNotFoundComponent } from './page-not-found.component';
import { CanActivateAuthGaurd } from './can-activate-service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/projects', },//note: you can still redirect to projects even though its part of child routes 
  { path: 'login' , component : LoginComponent},
  //{ path: 'projects', component: ProjectListComponent },
  // { path: 'projects/:id', component: ProjectComponent }, -- not used 
  { path: 'tasks',
    component: TasksComponent,
    canActivate : [CanActivateAuthGaurd], 
    canActivateChild : [CanActivateAuthGaurd],
    children:[      
         { path: '', component: TaskListComponent },
         { path: ':id', component: TaskComponent },
       ]
   },
  //Lazy Loaded Feature 
  { path: 'milestones', loadChildren: 'app/milestone/milestones.module#MilestonesModule' },
  // { path: 'milestones', component: MilestoneListComponent },
  // { path: 'milestones/:id', 
  //   component: MilestoneComponent ,
  //   resolve :{ milestone: MilestoneResolver}
  // },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }

export const routableComponents = [
  // ProjectListComponent,
  // ProjectComponent,
  TasksComponent,
  TaskListComponent,
  TaskComponent,
  //Lazy loaded - feature milestone
  // MilestoneListComponent, 
  // MilestoneComponent,
  PageNotFoundComponent,
  LoginComponent
];







