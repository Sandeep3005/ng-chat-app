import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-in-list',
  templateUrl: './user-in-list.component.html',
  styleUrls: ['./user-in-list.component.css']
})
export class UserInListComponent implements OnInit {

  @Input() user;
  constructor() { }

  ngOnInit() {
  }

}
