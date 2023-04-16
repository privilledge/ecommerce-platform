import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../class/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginurl = "http://localhost:4100/api/v1/signin";
  private regUrl = "http://localhost:4100/api/v1/reg";

  constructor(private httpClient:HttpClient) { }
  
  loginUser(user:Login):Observable<Object>{
    return this.httpClient.post(`${this.loginurl}`, user);
  }

  regUser(user:Login):Observable<Object>{
    return this.httpClient.post(`${this.regUrl}`, user, {responseType: 'text'});
  }
}
