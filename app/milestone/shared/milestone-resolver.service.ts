import { Observable } from 'rxjs/Observable';
import { MilestoneService } from './../../models/milestone.service';
import { Injectable } from '@angular/core';
import { Milestone } from './../../models/milestone.model';

import {Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class MilestoneResolver implements Resolve<Milestone> {
    constructor(
        private milestoneService: MilestoneService,
        private router:Router 
    ) { }

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

       let id = +route.params["id"];
       return this.milestoneService.getMilestone(id)
       .then(milestone =>{
           if(milestone){
               return milestone;
           }
            // Return a new object, if you are going to create a new one
            return new Milestone();
             // We could throw an error here and catch it
            // and route back to the Milestone list
            // let msg = `Milestone id ${id} not found`;
            // console.log(msg);
            // throw new Error(msg)
       })
       .catch((error:any)=>{
           console.log(`$(error). Heading back to Milestone List`);
           this.router.navigate(['/milestones']);
           return Observable.of(null);           
       })
   }
}