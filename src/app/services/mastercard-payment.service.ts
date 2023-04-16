import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mastercard } from '../class/mastercard';

@Injectable({
  providedIn: 'root'
})
export class MastercardPaymentService {

  private paymentUrl = "http://localhost:4100/api/v1/ltc/mastercard";


  constructor(  private httpClient:HttpClient ) { }


  makePayment(mastercard:Mastercard):Observable<Object>{
    return this.httpClient.post(`${this.paymentUrl}`, mastercard, {responseType: 'text'})
  }
}
