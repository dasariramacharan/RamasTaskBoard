import { Injectable }from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CONFIG } from '../config'
let milestonesUrl = CONFIG.baseUrls.milestones;

import { Milestone} from './milestone.model'

@Injectable()
export class MilestoneService {

  constructor(private http: Http) { }

  getMilestones(): Promise<Milestone[]> {
   return this.http.get(milestonesUrl)
      .map((respone: Response) => <Milestone[]>respone.json().data)
      .toPromise().
      catch(this.handleError);
  }


  getMilestone(id:number): Promise<Milestone> {//: Milestone  - TODO: identify how to specify non promise return type and result directly instead of promise 
   return this.getMilestones()
    .then((milestones:Milestone[]) =>{
          return milestones.find(m=>m.id === id);
    });  
  }
  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Promise.reject(msg);
  }
}