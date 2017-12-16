import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  constructor() { }

  sendMessage(chatMsg) {
    console.log(chatMsg);
  }
}
