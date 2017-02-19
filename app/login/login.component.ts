import { UserProfileService } from './login-profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { OnDestroy, Component} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from '../core/toastr.service';

@Component({
    moduleId: module.id,
    //selector: 'my-login',--note: no selector needed
    templateUrl: 'login.component.html',
    providers:[LoginService]
})
export class LoginComponent implements OnDestroy {   
   private loginSub : Subscription;
   
   constructor(
       private loginService : LoginService,
       private route : ActivatedRoute,
       private router : Router,
       private  userProfileService: UserProfileService,
       private toastrService : ToastrService
   ) { }
   
   private get isLoggedIn() : boolean{
        //Note: this is a property of type boolean 
        //its not a function.
        
       return this.userProfileService.isLoggedIn;
   }

   logout(){
       this.loginService.logOut();
       this.toastrService.info("Sucessfully logged out");
   }

   login(){
       this.loginSub = this.loginService
        .login()
        //Projects each source value to an Observable which is merged in the output Observable.
        .mergeMap(loginResult => this.route.queryParams)//TODO:understand use of mergemap here?
        .map(qp => qp['redirectTo'])
        .subscribe(redirectTo => {
            console.log(`Successfully logged in`);
            if (this.userProfileService.isLoggedIn) {
            let url = redirectTo ? [redirectTo] : [ '/' ];
            this.router.navigate(url);
            }
        });
   }

   ngOnDestroy() {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/