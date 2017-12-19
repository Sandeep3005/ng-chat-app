import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../shared/material.module';

import { ChatFormComponent } from './../chat-form/chat-form.component';
import { FeedComponent } from './../feed/feed.component';
import { ChatroomComponent } from './../chatroom/chatroom.component';
import { MessageComponent } from './../message/message.component';
import { SignupFormComponent } from './../signup-form/signup-form.component';
import { LoginFormComponent } from './../login-form/login-form.component';
import { UserListComponent } from './../user-list/user-list.component';
import { UserInListComponent } from './../user-in-list/user-in-list.component';

@NgModule({
  declarations: [
    ChatFormComponent,
    FeedComponent,
    ChatroomComponent,
    MessageComponent,
    SignupFormComponent,
    LoginFormComponent,
    UserListComponent,
    UserInListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule
  ]

})
export class CoreModule {
}