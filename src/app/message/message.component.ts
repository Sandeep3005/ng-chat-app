import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../modals/chat-message.modal';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input('message') message: ChatMessage;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.authUser().subscribe((res) => {
      if (res) {
        this.message.fromMe = this.message.email === res.email ? true : false;
      }
    });
  }

}
