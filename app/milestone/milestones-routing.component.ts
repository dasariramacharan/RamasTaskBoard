import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilestoneComponent } from './Milestone.component';
import { MilestonesComponent } from './Milestones.component';
import { MilestoneListComponent } from './Milestone-list.component';

import { MilestoneResolver } from './shared/milestone-resolver.service';

const routes: Routes = [
  { path: '',
    component: MilestonesComponent ,
    children : [
        {path : '', component: MilestoneListComponent},
        {path : ':id', component: MilestoneComponent,
         resolve :{ milestone: MilestoneResolver}},        
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers :[MilestoneResolver]
})
export class MilestonesRoutingModule { }

export const routedComponents = [
  MilestoneComponent,
  MilestoneListComponent,
  MilestonesComponent
  ];