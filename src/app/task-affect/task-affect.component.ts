import { Component, OnInit } from '@angular/core';
import { TaskAffect } from '../models/task_affect';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
@Component({
  selector: 'app-task-affect',
  templateUrl: './task-affect.component.html',
  styleUrls: ['./task-affect.component.css']
})

export class TaskAffectComponent implements OnInit {
  taskAffect: TaskAffect;
  id: number;
  description: string;
  submitted = false;
  task: Task ;
  user: User = new User();
  roleUser: string = '';
  listTasktoDisplay: Task[];
  userNameFromCurrent : string ;
  listTaskFor: Task[];
  isSubmitted:boolean =false;
  constructor(private userService: UserService , private route: ActivatedRoute, private router: Router, private taskService:TaskService) { 
    this.taskAffect = new TaskAffect();
  }
  
  ngOnInit() {
    this.id = this.route.snapshot.params[ 'id' ];
    
    this.taskService.getTaskById(this.id)
    .subscribe(data => {
      this.taskAffect.task = data;
    }, error => 
      console.log(error) );

    this.userService.getUsers()
      .subscribe(data => {
        this.taskAffect.users = data;
      }, error =>
        console.log(error)
      );
 }

 onSubmit() {
   
  this.isSubmitted=true;
  this.taskService.affectTask( this.taskAffect)
  .subscribe(data =>{
    this.updateStatutTask();
    console.log('data',data)
  }
    , error => console.log(error));
     this.goToList();
  
  }


 goToList()
 {

  this.router.navigate(['tasks']);
}

 updateStatutTask() {
  this.taskService.getTaskById(this.id)
  .subscribe(data => {
   
    this.task = data;
    this.task.affected=true; 
    
    this.taskService.updateTask( this.id, this.task)
   .subscribe(data => console.log('data in update',data), error => console.log(error));

   }, error => console.log(error));


}

 getUserWithRole(){
   if( this.roleUser =='' ){
    return this.taskAffect.users;}
    else if( this.roleUser == 'ROLE_INGENIEUR' ){
    let listRoleIng = [];
    for (let index = 0; index < this.taskAffect.users.length; index++) 
     {
      if(this.taskAffect.users[index].roles[0].name=='ROLE_INGENIEUR'){
        listRoleIng.push(this.taskAffect.users[index]);
      }
    }
    return listRoleIng;
   }
   else if( this.roleUser=='ROLE_TECHNICIEN' ){
   let listRoleTech = [];
   for (let index = 0 ; index < this.taskAffect.users.length ; index++) 
    { if (this.taskAffect.users[index].roles[0].name == 'ROLE_TECHNICIEN') {
        listRoleTech.push(this.taskAffect.users[index]);} }
    return listRoleTech;
   }

 }
}


