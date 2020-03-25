import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
//les Décorateurs modif les prop d'une classe
//@Component indique que CreateTaskComponent est un composant
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  task: Task = new Task();
  valideDate=false;
  submitted = false ;
  userManger: User = new User();
  profile: User=new User();
  id :number;


  constructor(private taskserice: TaskService ,
            private router: Router,
            private userService: UserService) {

   }
   ngOnInit() {
   }

  onSubmit() {

    this.task.username = this.userService.getProfileCurrentUser().username;

    console.log('this.task.startDate ',this.task.startDate )

    if (this.task.startDate < this.task.endDate)
    { this.submitted = true;
      this.valideDate = false;
      this.task.etat="to do"
      this.taskserice.createTask(this.task)
      .subscribe(data => {

       console.log('this.task.startDate', this.task.startDate < this.task.endDate);

      }
      ,
      error => {
        console.log(error)
      });}

      else { this.valideDate = true;
             this.submitted = false;

      }
  }

  gotoList() {
    this.router.navigate(['/tasks']);
  }
}
