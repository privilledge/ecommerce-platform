import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../class/orders';
import { Users } from '../class/users';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private baseUrl = "http://localhost:4100/api/v1/orders";
  private userOrdersUrl = "http://localhost:4100/api/v1/orders/user";
  private orderByOrderNumb = "http://localhost:4100/api/v1/orders/byorder";
  
  constructor(    private httpClient:HttpClient) { }

  createOrder(order:Orders):Observable<Object>{
   return this.httpClient.post(`${this.baseUrl}`, order);
  }

  getOrderList(id:number):Observable<Orders[]>{
    return this.httpClient.get<Orders[]>(`${this.userOrdersUrl}/${id}`)
  }

  getSingleOrder(id:number):Observable<Orders>{
    return this.httpClient.get<Orders>(`${this.baseUrl}/${id}`)
  }

  getOrderByOrderNumber(order:String):Observable<Orders>{
    return this.httpClient.get<Orders>(`${this.orderByOrderNumb}/${order}`);
  }

}
