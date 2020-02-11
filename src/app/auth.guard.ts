import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Injectable()
 export class Auth implements CanActivate  {
    constructor(private user: UserService, private router: Router) {}

    canActivate() {

      if (!this.user.isLoggedIn())
      // tslint:disable-next-line:one-line
      {
         this.router.navigate(['/account/login']);
         return false;
      }

      return true;
    }

}
