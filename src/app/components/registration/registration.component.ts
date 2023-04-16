import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Login } from 'src/app/class/login';
import { Users } from 'src/app/class/users';
import { LoginService } from 'src/app/services/login.service';
import { RoleService } from 'src/app/services/role.service';

import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

user:Users = new Users();
login:Login = new Login();

  constructor(    private userService:UsersService,
                  private roleService:RoleService,
                  private router:Router,
                  private toast:NgToastService,
                  private loginService:LoginService

    ) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.userService.registerUser(this.user).subscribe( data =>{
      this.addRoleToUser();
    })

    this.login.email = this.user.email;
    this.login.password = this.user.password;
    this.login.role = "User";

    this.loginService.regUser(this.login).subscribe( data => {
      this.toast.success({detail:"Success", summary:"Registration successful"});
      this.router.navigate(['login']);
    },
    error => this.toast.error({detail:"Error", summary:"Registration failed"}))


}

  addRoleToUser(){
    this.user.roleName ="user";
    this.roleService.addRole(this.user).subscribe(data =>{
      this.toast.success({detail:"Success", summary:"Registration successful"});
    },
    error => this.toast.error({detail:"Error", summary:"Registration failed"}));
  }

}
