import { Component, OnInit } from '@angular/core';


import { User } from '../models/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  user: User;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  passwordconfirm: string;

  constructor(private userService: UserService) { }

  ngOnInit() { }

  onSubmit() {
    this.user = this.form;
    this.userService.signUp(this.user).subscribe(
      data => {
        this.isSignedUp = true;
        this.isSignUpFailed = false;},
      error => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  
}
