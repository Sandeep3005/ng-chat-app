import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router:Router) { 
  }

  canActivate(): Observable<boolean> {
    return this.authService.authUser().map((res) => {
      if (res) return true;
      this.router.navigate(['signup']);
      return false;
    });
  }
}