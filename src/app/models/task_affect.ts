import { User } from './user';
import { Task } from './task';

export class TaskAffect {
    id: number;
    user: User; 
    task: Task;
    users: any[];
}