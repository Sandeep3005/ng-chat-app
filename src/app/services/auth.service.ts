import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import { User } from '../modals/user.modal';

import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private authState: any;

  // Will contain personal details for user profile
  private userData: Object;

  constructor(
    private router:Router,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.user = afAuth.authState;
  }

  authUser() {
    return this.user;
  }

  getUserID() {
    return this.authState ? this.authState.uid : undefined;
  }

  login(userInput) {
    return this.afAuth.auth.signInWithEmailAndPassword(userInput.email, userInput.password)
      .then((user) => {
        console.log(user);
        this.authState = user;
        this.router.navigate(['chat'])
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  signUp(userInput) {
    let authData = this.afAuth.auth.createUserWithEmailAndPassword(userInput.email, userInput.password);
    return authData.then(
      (user)=> {
        this.authState = user;
        this.setUserData(userInput.email, userInput.username)
      }).catch((err) => console.log(err));
  }

  getUserData(uid) {
    let path = `users/${uid}`;
    return this.db.object(path);
  }

  setUserData(email, username) {
    let path  = `users/${this.getUserID()}`;
    const status = 'online';
    const userData = { email, username, status };
    this.db.object(path).update(userData)
      .catch((err) => console.log(err))
  }

  getUsersData() {
    let path = '/users';
    return this.db.object(path);
  }
}
