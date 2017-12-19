import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ChatMessage } from '../modals/chat-message.modal';

import { ChatService } from './../services/chat.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {

  chatMessages: ChatMessage[];
  isLoading: boolean = true;

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.chatService.getEarlierMessages().subscribe((res) => {
      this.chatMessages = res;
      this.isLoading = false;
    });
  }

  ngOnChanges() {
    this.chatService.getEarlierMessages().subscribe((res) => {
      this.chatMessages = res;
      this.isLoading = false;
    });
  }

}
