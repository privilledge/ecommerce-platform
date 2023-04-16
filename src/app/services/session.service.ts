import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(      private cookie:CookieService,
                    private router:Router,
                    private toast:NgToastService
    ) { }


    checksession(){
      const cookieExists: boolean = this.cookie.check('clientDetails');
      if(cookieExists == false){
        this.toast.warning({position:"Central"});
        this.router.navigate(["/login"]);
      }
    }
}
