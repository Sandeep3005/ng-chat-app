import { Component, OnInit } from '@angular/core';
import { ChatService } from './../services/chat.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  onSubmit(chatForm) {
    console.log('hi = ', chatForm);
    this.chatService.sendMessage(chatForm.value.chatInput)
  }

  runthis(event, chatForm) {
    if (event.keyCode === 15) {
      this.onSubmit(chatForm);
    } 
  }

}
