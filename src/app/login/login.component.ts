import { Component, OnInit } from '@angular/core';
import { AuthLoginInfo } from '../models/login-info';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LOGO = require ('../images/logo-Proxym-Group-Final-vectorisé.png');
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string;
  loginInfo: AuthLoginInfo;
  user:User;

  constructor( private userService: UserService, 
              private router : Router,
              private toastr: ToastrService)
  { this.loginInfo = new AuthLoginInfo(); }

  ngOnInit() {

    if (this.userService.getToken()) {
        this.isLoggedIn = true;
        this.roles = this.userService.getAuthorities();
    }}

  onSubmit() {
       console.log( 'this.form ' , this.form);
       this.isLoginFailed = false;
       this.loginInfo.username = this.form.username ;
       this.loginInfo.password = this.form.password ;
     
       this.userService.attemptAuth(this.loginInfo).subscribe(
        (data: any ) => {
            console.log('data', data);
            try{
              if ( data && data.error ) {
                this.isLoginFailed = true;
              } else {
                let currentUser: any;
                currentUser = {};
                currentUser.profile = {};
                currentUser.profile.firstname ='';
                console.log('data.name', data.name );
                currentUser.profile.lastname = 'lastname';
                currentUser.profile.email = 'email@tunis.com';

                /*this.user.username = data.username;
                currentUser.profile = this.user;
                console.log('currentUser.profile', currentUser.profile );*/
                currentUser.profile.name = data.name;
                console.log('data.name', data.name ); 
                currentUser.profile.username = data.username;
                currentUser.isAuthenticated = true;
                currentUser.tokenAuth = data.accessToken; 
                console.log('current User', currentUser );
                currentUser.profile.role =  data.authorities;
                console.log('currentUser.profile.role', currentUser.profile.role );
                currentUser.profile.roleName = data.authorities[0].authority;
                console.log('currentUser.profile.roleName', currentUser.profile.roleName );
                this.userService.setCurrentUser(currentUser);
                localStorage.setItem('CUREENT_USER', JSON.stringify(this.userService.getCurrentUser()));
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                console.log('userService', this.userService);
                this.router.navigate(['/home']);    

                this.toastr.success('Bienvenue', currentUser.profile.username);
            }
          }
          catch(ex){
            console.log(ex);
          }
  
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
        }
      );
  }
}
