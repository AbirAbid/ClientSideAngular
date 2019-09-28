import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Observable } from 'rxjs';
import { TaskAffect } from '../models/task_affect';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-all-user',
  templateUrl: './task-all-user.component.html',
  styleUrls: ['./task-all-user.component.css']
})
export class TaskAllUserComponent implements OnInit {
 
 listTaskAffObserv: Observable<TaskAffect[]>;
 listTasktoDisplay:  TaskAffect[]=[];
 listTaskAff: TaskAffect[];
 userNameFromCurrent : string ;

 constructor(private taskService: TaskService,  private router: Router , private userService: UserService) {}

  ngOnInit() {
   
   this.reloadData();
   }

  reloadData() {
    let currentUser: any;
    currentUser = {};
    currentUser.profile = {};
    currentUser = this.userService.getCurrentUser();
    this.userNameFromCurrent = currentUser.profile.username;
    this.taskService.getTasksAffect().subscribe((tasks: TaskAffect[]) => {

    this.listTaskAff = tasks;
    
    console.log(' this.listTaskAff', this.listTaskAff)
    this. listTasktoDisplay = this.getTaskByUserName();
  
  }); 
}

updateTask(id: number){
  this.router.navigate(['update', id]);
}
 

getTaskByUserName() {
  let listTaskDisplay = [];
  for (let index = 0; index < this.listTaskAff.length; index++) 
   { 
      if(this.listTaskAff[index].user.username  &&  this.listTaskAff[index].user.username ===  this.userNameFromCurrent )
     { console.log('this.listTaskAff[index]', this.listTaskAff[index].user.username);
        listTaskDisplay.push(this.listTaskAff[index]) ;
      }
    } 
  return listTaskDisplay ;
}

}