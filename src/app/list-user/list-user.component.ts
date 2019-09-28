import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
great :string;
users : User[]=[]; 
pageOfItems: Array<any>;
try : boolean;
constructor(private userService: UserService,private router: Router ) { }
 ngOnInit() {

    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users; 

    });

          }



 updateUser(id: number) {
        this.router.navigate(['user', id]);
      }
 detailUser(id: number) {
        this.router.navigate(['userdetail', id]);
      }
 onChangePage(pageOfItems: Array<any>) {
        this.pageOfItems = pageOfItems;
    }
  }
