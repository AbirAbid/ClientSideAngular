import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { TaskAffect } from '../models/task_affect';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user :User; 
  id : number;
  listTaskAff: TaskAffect[];
  listTasktoDisplay:  TaskAffect[]= [];
  constructor(private taskService: TaskService,private userService: UserService,private router: Router,private route: ActivatedRoute ) { }

  ngOnInit() {
    this.user =new User(); 
    this.id = this.route.snapshot.params['id'] ;

    this.userService.getUserById(this.id).subscribe(
      data=>{ console.log(data);
        this.user = data;
      }, error => console.log(error));

    this.taskService.getTasksAffect().subscribe((tasks: TaskAffect[]) => {
     
        this.listTaskAff = tasks;
        console.log('this.listTaskAff',this.listTaskAff);
        console.log('tasks',tasks);
        this. listTasktoDisplay = this.getTaskById();
        console.log(' this. listTasktoDisplay', this. listTasktoDisplay);
      });

  }
  list(){
    this.router.navigate(['users']);
  }

  getTaskById() {
    let listTaskDisplay = [];
   
    for (let index = 0; index < this.listTaskAff.length; index++) 
     { 
        if(this.listTaskAff[index].user.username  &&  this.listTaskAff[index].user.username ===  this.user.username )
       { console.log('this.listTaskAff[index]', this.listTaskAff[index].user.username);
          listTaskDisplay.push(this.listTaskAff[index]) ;
        }
      } 
    return listTaskDisplay ;
  }

}
