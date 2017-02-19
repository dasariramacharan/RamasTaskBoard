import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';

import { MilestoneComponent } from './milestone.component';
import { MilestonesComponent } from './milestones.component';
import { MilestoneListComponent } from './milestone-list.component';

import {MilestoneService} from '../models/Milestone.service';

import { MilestonesRoutingModule , routedComponents } from './milestones-routing.component';


@NgModule({
    imports: [CommonModule,FormsModule,MilestonesRoutingModule],
    exports: [],
    declarations: [routedComponents],
    providers: [MilestoneService],
})
export class MilestonesModule { }

 