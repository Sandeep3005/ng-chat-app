import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';
import { User } from '../modals/user.modal';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  user: User;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailInput: new FormControl('', [Validators.required, Validators.email]),
      passwordInput: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  login() {
    let { emailInput, passwordInput } = this.loginForm.value;
    this.user = {
      email: emailInput,
      password: passwordInput,
    }
    this.authService.login(this.user).then((resolve) => {
      this.router.navigate(['chat'])
    });
  }
}
