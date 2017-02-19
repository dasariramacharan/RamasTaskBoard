import { Milestone } from './../models/milestone.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-milestone',
    templateUrl: 'milestone.component.html'
})
export class MilestoneComponent implements OnInit {
    private id:number;     
    private milestone:Milestone;

    constructor(
       private route : ActivatedRoute,
       private router : Router, 
    ) { }

    ngOnInit() { 
     //using MilestoneResolver to resolve data
     this.route.data.subscribe((data: { milestone : Milestone })=>{
         this.setEditMilestone(data.milestone);
         this.id = data.milestone.id;
     });
    }

    private setEditMilestone(milestone : Milestone){
         if(milestone){
            this.milestone = milestone;
            //this.milestone = this.entityService.clone(this.milestone);
         }else{
             this.gotoMilestones();
         }  
    }

    private gotoMilestones(){
        this.router.navigate(['./milestones']);
    }

}