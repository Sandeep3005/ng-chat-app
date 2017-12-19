import { AuthService } from './../services/auth.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../modals/user.modal';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private authService:AuthService) { }
  users: any[] = [];
  ngOnInit() {
    this.authService.getUsersData().subscribe((res) => {
      Object.keys(res).forEach((key) => {
        this.users.push(res[key]);
      });
    });
  }


}
