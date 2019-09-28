import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskAffectComponent } from './task-affect/task-affect.component';
import { AccountComponent } from './account/account.component';
import { TaskAllUserComponent } from './task-all-user/task-all-user.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { TasksDetailsComponent } from './tasks-details/tasks-details.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateGradeComponent } from './update-grade/update-grade.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  
  {
      path: 'auth/login',
      component: LoginComponent
  },
  {
      path: 'signup',
      component: RegisterComponent
  },
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
  {
       path: 'tasks',
       component: TaskListComponent
   },
   {    path: 'add',
        component: CreateTaskComponent
   },

  {     path: 'affect/:id',
        component: TaskAffectComponent
  },
  {
      path: 'account',
      component: AccountComponent
  },
  {
    path: 'taskuser',
    component: TaskAllUserComponent
  },
  {     path: 'update/:id',
        component: TaskUpdateComponent
  },

  {     path: 'detail/:id',
        component: TasksDetailsComponent
  },
  {     path: 'users',
        component: ListUserComponent
  },
  {     path: 'user/:id',
        component: UpdateGradeComponent
  },
  {     path: 'userdetail/:id',
        component: UserDetailComponent
  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
