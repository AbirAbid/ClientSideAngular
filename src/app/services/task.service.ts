import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // private urlTasks = 'http://localhost:8080/tasks';
  urlTasks = environment.urlTasks;
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getTasksAffect(): Observable<any> {
    return this.http.get(this.baseUrl + 'listTaskAffect');
  }
  getTasks(): Observable<any> {
    return this.http.get(this.urlTasks);
  }
  getTaskById(id: number):Observable<any> {
    return this.http.get( this.urlTasks + '/' + id);
  }

   createTask(task: any): Observable<Object> {
    return this.http.post<string>(this.urlTasks+'/'+task.username, task);
  }
  deleteTask(id: number): Observable<any> {
    return this.http.delete((this.urlTasks + '/' + id), { responseType: 'text' });
  }
  affectTask(taskAff: Object): Observable<Object> {
    return this.http.post<string>(this.baseUrl + 'AffectedTask', taskAff);
  } 
  updateTask(id: number, value: any): Observable<Object> {
    return this.http.put(this.urlTasks + '/' + id , value);
  }
  deleteTaskAffected(id: number): Observable<any> {
    return this.http.delete((this.baseUrl + 'listTaskAffect/' + id), { responseType: 'text' });
  }
}