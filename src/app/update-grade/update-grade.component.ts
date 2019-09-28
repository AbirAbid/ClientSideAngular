import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-grade',
  templateUrl: './update-grade.component.html',
  styleUrls: ['./update-grade.component.css']
})
export class UpdateGradeComponent implements OnInit {
  user: User = new User();
  submitted = false;
  id: number;
  role:string;
  constructor(
     private route: ActivatedRoute, private userService: UserService , private router: Router,private toastr: ToastrService)
  { }
  
  ngOnInit() {
   
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id)
      .subscribe(data => {
        this.user = data;
        console.log('this.user',this.user)
      }, error => console.log(error));
     }

    onSubmit() {
    if(this.user.role==='ROLE_MANAGER')
    {
      this.user.roles[0].id = 1;
      this.user.roles[0].name = 'ROLE_MANAGER';
    }
    this.userService.updateUser( this.id, this.user)
      .subscribe(data => 
        {
  
      
        console.log('data',data);
        this.GoToList();
        this.toastr.success('Modification avec succée');
        }, 
      error => console.log(error));
         this.submitted=true;
        
  }

GoToList(){
  this.router.navigate(['/users']);
}
}
