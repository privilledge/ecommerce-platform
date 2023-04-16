import { HttpClient, HttpHeaders, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';
import { Login } from 'src/app/class/login';
import { Users } from 'src/app/class/users';
import { LoginService } from 'src/app/services/login.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Users = new Users();
  login: Login = new Login(); //Temporary
  userDetails: Users = new Users();


  password: any;
  email: any;
  userObj: any;
  constructor(private router: Router,
    private userService: UsersService,
    private httpClient: HttpClient,
    private toast: NgToastService,
    private cookie: CookieService,
    private loginService: LoginService //To be removed
  ) { }

  ngOnInit(): void {
  }



  loginUser() {

    this.login.email = this.user.email;
    this.login.password = this.user.password;

    this.loginService.loginUser(this.login).subscribe(data => {
      this.userService.getUserByEmail(this.login.email).subscribe(data => {
        this.userDetails = data;

        this.toast.success({ detail: "Success", summary: "Login Successful", duration: 3000 }); //creating userDetails cookie
        if (this.userDetails != null) {
          this.cookie.set("clientDetails", JSON.stringify(this.userDetails), { expires: 14 });
          window.location.href = '';
        }
      })
    }, error => this.toast.error({ detail: "Error", summary: "Invalid Login Credentials", duration: 2500 }))
    // END OF METHODS TO BE DELETED
    // this.email = this.user.email;
    // this.password= this.user.password;

    // const headers = new HttpHeaders()
    // .append(
    //   'Content-Type',
    //   'application/json'
    // );

    // const body=JSON.stringify(this.user);

    // const params = new HttpParams()
    //   .append('email', this.email)
    //   .append('password', this.password);

    // this.httpClient
    //           .post<any>(`http://localhost:4100/login`, {responseType: 'text'}, {
    //             headers:headers,
    //             params:params,
    //           }).subscribe( data =>{
    //             this.userService.getUserByEmail(this.email).subscribe( data => {
    //               this.userDetails = data;

    //               this.toast.success({detail:"Success", summary:"Login Successful", duration:3000}); //creating userDetails cookie
    //               if(this.userDetails != null){
    //                 this.cookie.set("clientDetails", JSON.stringify(this.userDetails), {expires:14});
    //                 window.location.href= '';
    //               }
    //             },
    //              error => this.toast.error({detail:"error", summary:"Failed to create session cookie"}));
    //             console.log(data);
    //           },
    //           error =>  this.toast.error({detail:"Error",summary:"Invalid Login Credentials", duration:2500 })

    //           );
  }

}
