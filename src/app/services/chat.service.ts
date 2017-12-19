import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { ChatMessage } from '../modals/chat-message.modal';
import { User } from '../modals/user.modal';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {

  private newChatMessage: ChatMessage;
  private earlierMessages: FirebaseListObservable<ChatMessage[]>;
  private user: User;
  // Will contain personal details for user profile
  private userData;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !==null && auth !== undefined) {
        this.user = auth;
      }
    })
  }

  sendMessage(chatMsg: string) {
    this.authService.getUserData(this.user.uid).subscribe((res) => {
      this.userData = res;
      this.newChatMessage = {
        email: this.userData.email,
        username: this.userData.username,
        message: chatMsg,
        timeSent: new Date().toUTCString(),
      }
      this.earlierMessages = this.getEarlierMessages();
      this.earlierMessages.push(this.newChatMessage);
    });
  }

  getEarlierMessages(): FirebaseListObservable<ChatMessage[]> {
    return this.db.list('message', {
      query: {
        limitToLast: 25,
        orderByKey: true,
      }
    });
  }
}
