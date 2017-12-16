import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from "../signup-form/signup-form.component";
import { LoginFormComponent } from "../login-form/login-form.component";
import { ChatroomComponent } from "../chatroom/chatroom.component";

const appRoutes: Routes = [
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'chat', component: ChatroomComponent },
  { path: '', redirectTo: '/login', pathMatch:'full' },
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}