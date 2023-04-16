import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { OrderDetailsDTO } from '../class/order-details-dto';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  private baseUrl = "http://localhost:4100/api/v1/orderDetails";

  constructor(    private httpClient:HttpClient) { }

  createOrderDetails(order:OrderDetailsDTO):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, order);
  }


}
