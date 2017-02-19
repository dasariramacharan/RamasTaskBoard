import { Observable } from 'rxjs/Observable';
import { UserProfileService } from './login-profile.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    constructor(private userProfileService:UserProfileService) { }

    login(){
        return Observable.of(true)
        .delay(1000)
        .do(this.toggleLogState.bind(this));//Note: here this would refer to always the 
                                         // value of scrope which is 'true' here  
    }

    logOut(){
        this.toggleLogState(false);
    }

    private toggleLogState(val: boolean){
        this.userProfileService.isLoggedIn = val;
    }
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/