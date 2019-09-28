import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.css']
})
export class TasksDetailsComponent implements OnInit {

  id: number;
  task: Task;

  constructor(private route: ActivatedRoute,private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    this.task = new Task();
    this.id = this.route.snapshot.params['id'] ;
    this.taskService.getTaskById(this.id)
      .subscribe(data => {
        console.log(data);
        this.task = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['tasks']);
  }
}
