import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialogue.service';
import { TaskAffect } from '../models/task_affect';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  listTaskFor: Task[];
  tasks: Observable<Task[]>;
  private listTasktoDisplay: Task[] = [];
  userNameFromCurrent : string ;

 constructor(private userService: UserService,
  private taskService: TaskService, private router: Router , private confirmationDialogService: ConfirmationDialogService) 
  {
  }

ngOnInit() {
  this.reloadData();
}
 reloadData() {
    let currentUser: any;
    currentUser = {};
    currentUser.profile = {};
    currentUser = this.userService.getCurrentUser();
    this.userNameFromCurrent = currentUser.profile.username;
    console.log('   this.userNameFromCurrent', this.userNameFromCurrent);
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
    this.listTaskFor = tasks;
    this. listTasktoDisplay = this.getTasksManger();
  
    });
}

getTasksManger(){
  let listTaskDisplay = [];
  for (let index = 0; index < this.listTaskFor.length; index++) 
   { if(this.listTaskFor[index].usermanger.username  &&  this.listTaskFor[index].usermanger.username  ===  this.userNameFromCurrent )

   { listTaskDisplay.push(this.listTaskFor[index]) ;}} 
     return listTaskDisplay ;
   }
public openConfirmationDialog(id: number) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete ?')
    .then((confirmed) => {
      if(confirmed === true) { 
        this.taskService.deleteTask(id)
          .subscribe(
            data => {
              console.log(data);
              this.reloadData();},
            error => console.log(error));}
      console.log('User confirmed:', confirmed)
      console.log('this.confirmationDialogService.confirm', this.confirmationDialogService.confirm);
  })
  
  .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
   }


 affectTask(id: number) {
  this.router.navigate(['affect', id]);
}
updateTask(id: number){
  this.router.navigate(['update', id]);
}
 detailTask(id : number)
  {
    this.router.navigate(['detail', id]);
  }
addTask() {
  this.router.navigate(['add']);
}

getTaskAffectByTask()
{



}

}
