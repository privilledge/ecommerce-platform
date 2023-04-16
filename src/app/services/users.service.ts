import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Users } from '../class/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private registerUrl = "http://localhost:4100/api/v1/users/register";
  private loginUrl = "http://localhost:4100/login";
  private singleUrl = "http://localhost:4100/api/v1/users";


  constructor(  private httpClient:HttpClient   ) { }

  registerUser(user:Users):Observable<Object>{
    return this.httpClient.post(`${this.registerUrl}`, user,{responseType: 'text'});
  }

  getUserByEmail(email:String):Observable<Users>{
    return this.httpClient.get<Users>(`${this.singleUrl}/${email}`);
  }

}
