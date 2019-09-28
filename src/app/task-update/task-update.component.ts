import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { TaskAffect } from '../models/task_affect';
@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  task: Task = new Task();
  submitted = false;
  id: number;
  constructor(
     private route: ActivatedRoute, private taskservice: TaskService, private userService: UserService , private router: Router) 
  { }
  
  ngOnInit() {
    this.task = new Task();
    this.id = this.route.snapshot.params['id'];
    this.taskservice.getTaskById(this.id)
      .subscribe(data => {
        console.log(data)
        this.task = data;
      }, error => console.log(error));
     }

    onSubmit() {
    this.taskservice.updateTask( this.id, this.task)
      .subscribe(data => console.log(data), error => console.log(error));
         this.task = new Task();
         this.submitted=true;
         this.liberTaskAffected();
         this.gotoList();
      
  }

  gotoList() {
    let currentUser: any;
    currentUser = {};
    currentUser.profile = {};
    currentUser = this.userService.getCurrentUser();

    if (currentUser.profile.role[0].authority === 'ROLE_MANAGER') {
      this.router.navigate(['/tasks']); 
      return false;
    } else if (currentUser.profile.role[0].authority === 'ROLE_INGENIEUR'  ) {
      this.router.navigate(['/taskuser']); 
      return false ;  
    } else if ( currentUser.profile.role[0].authority === 'ROLE_TECHNICIEN' ) {
      this.router.navigate(['/taskuser']); 
      return false ;  
    }
}

 liberTaskAffected(){
    this.taskservice.getTasksAffect().subscribe((taskAff: TaskAffect[]) => {
    console.log('TaskAffect',taskAff);
    for (let index = 0; index < taskAff.length; index++) 
    { 
      console.log('this.listTaskAff[index]', taskAff[index].task.affected === false);
      if(taskAff[index].task.affected === false )
     { this.taskservice.deleteTaskAffected(taskAff[index].id)
      .subscribe(
        data => {
          console.log(data);},
          error => console.log(error));
     }
     }  
    });

  }
  
}

