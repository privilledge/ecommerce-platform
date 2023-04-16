import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../class/users';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private addRoleToUser = "http://localhost:4100/api/v1/role/addtouser";

  constructor(    private httpClient:HttpClient   ) { }

  addRole(user:Users):Observable<Object>{
    return this.httpClient.post(`${this.addRoleToUser}`, user, {responseType: 'text'});
  }
}
