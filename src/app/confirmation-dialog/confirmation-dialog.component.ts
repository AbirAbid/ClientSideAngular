import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from "rxjs";
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { TaskAffect } from '../models/task_affect';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  tasks: Observable<Task[]>;
  constructor(private activeModal: NgbActiveModal, private taskService: TaskService) { }

  ngOnInit() {
    this.reloadData();
    }

   reloadData() {
    this.tasks = this.taskService.getTasks();
  }
 
  public decline() {
    this.activeModal.close(false);}

  
  public accept() {
        this.activeModal.close(true);
        this.reloadData();
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

}
