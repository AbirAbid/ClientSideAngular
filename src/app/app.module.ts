import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {httpInterceptorProviders} from './auth/auth-interceptor';

import {CreateTaskComponent} from './create-task/create-task.component';

import {TaskListComponent} from './task-list/task-list.component';
import {TaskUpdateComponent} from './task-update/task-update.component';
import {NavbarHeaderComponent} from './navbar-header/navbar-header.component';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {NgxPopper} from 'angular-popper';
import {ConfirmationDialogService} from './confirmation-dialog/confirmation-dialogue.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TaskAffectComponent} from './task-affect/task-affect.component';
import {AccountComponent} from './account/account.component';
import {TasksDetailsComponent} from './tasks-details/tasks-details.component';
import {TaskAllUserComponent} from './task-all-user/task-all-user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ListUserComponent} from './list-user/list-user.component';
import {DatePipe} from '@angular/common';
import {UpdateGradeComponent} from './update-grade/update-grade.component';
import {ToastrModule} from 'ngx-toastr';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {JwPaginationComponent} from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CreateTaskComponent,
    TaskListComponent,
    TaskUpdateComponent,
    NavbarHeaderComponent,
    ConfirmationDialogComponent,
    TaskAffectComponent,
    AccountComponent,
    TasksDetailsComponent,
    TaskAllUserComponent,
    ListUserComponent,
    UpdateGradeComponent,
    UserDetailComponent,
    JwPaginationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPopper,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() // ToastrModule added

  ],

  providers: [httpInterceptorProviders, ConfirmationDialogService, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent],
})
export class AppModule {
}
