import { User } from './../modals/user.modal';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
   this.authService.authUser().subscribe((res) =>{
      this.user = res;
    });
  }

  logout() {
    this.authService.logout();
  }
}
