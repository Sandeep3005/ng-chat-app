import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FirebaseModule } from './core/fire-base.module';

import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './core/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FirebaseModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    ChatService, 
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
