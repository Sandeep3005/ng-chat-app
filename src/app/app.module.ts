import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './shared/app-routing.module';
import { MaterialModule } from './shared/material.module';

import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';

import { AppComponent } from './app.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { FeedComponent } from './feed/feed.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { MessageComponent } from './message/message.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserInListComponent } from './user-in-list/user-in-list.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    FeedComponent,
    ChatroomComponent,
    MessageComponent,
    SignupFormComponent,
    LoginFormComponent,
    NavbarComponent,
    UserListComponent,
    UserInListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    ChatService, 
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
