import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChatService } from './../services/chat.service';
import * as _ from 'underscore';


@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  constructor(private chatService: ChatService) { }
  chatInputForm: FormGroup;

  ngOnInit() {
    this.chatInputForm = new FormGroup({
      chatInput: new FormControl('')
    });
  }

  onSubmit() {
    this.chatService.sendMessage(this.chatInputForm.value.chatInput);
    this.chatInputForm.reset();
  }

  runthis(event) {
    if (event.keyCode === 15) {
      this.onSubmit();
    } 
  }

}
