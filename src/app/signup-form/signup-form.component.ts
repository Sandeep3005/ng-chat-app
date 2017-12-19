import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';
import { User } from '../modals/user.modal';

import {  FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  user: User;
  signUpForm: FormGroup;

  constructor(
    private authService:AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      emailInput: new FormControl('', [Validators.required, Validators.email]),
      passwordInput: new FormControl('', [Validators.required, Validators.minLength(6)]),
      usernameInput: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  signUp() {
    let { emailInput, passwordInput, usernameInput } = this.signUpForm.value;
    this.user = {
      email: emailInput,
      password: passwordInput,
      username: usernameInput,
    }
    this.authService.signUp(this.user).then((resolve) => {
      this.router.navigate(['chat'])
    });
  }
}
