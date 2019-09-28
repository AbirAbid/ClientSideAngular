import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {
    //declare var require: any;
    role: string;
    authority: string;
    data: any ;
    LOGO = require ('../images/logoProx-ConvertImage.jpg');
    
    constructor( private userService: UserService, private router : Router) { 
      let currentUser = JSON.parse(localStorage.getItem('CUREENT_USER'));
      console.log('currentUser ', currentUser);
     
      if ( currentUser ) {
      this.userService.setCurrentUser(currentUser);}}


      ngOnInit() {
     
      if (this.userService.isAuthenticated()) {
      this.role = this.userService.getAuthorities();
      if (this.role === 'ROLE_MANAGER') {
          this.authority = 'manager';
          return false;
        } else if (this.role === 'ROLE_INGENIEUR') {
          this.authority = 'ingenieur';
          return false ;  
        } else if (this.role === 'ROLE_TECHNICIEN') {
          this.authority = 'technicien';
           return false;}}
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/home']);
  }
}

