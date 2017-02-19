import{Component,OnInit} from '@angular/core'
import {Response} from '@angular/http'

import { MilestoneService } from '../models/milestone.service'
import { Milestone} from '../models/milestone.model'

@Component({
  moduleId: module.id,
  selector: 'my-milestone-list',
  templateUrl:'./milestone-list.component.html',
   styles: ['li {cursor: pointer;} .error {color:red;}']  
})
export class MilestoneListComponent implements OnInit{

  milestones: Promise<Milestone[]>;
  errorMessage :string;

  constructor(private milestoneService: MilestoneService) { }

  ngOnInit() {
    this.milestones = this.milestoneService.getMilestones()
    .catch(error=>this.handleError(error));
  }

  handleError(error: Response){
    this.errorMessage = "error in getting Milestones";
    console.log(error);    
  }

}