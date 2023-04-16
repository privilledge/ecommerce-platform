import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../class/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private baseURL = "http://localhost:4100/api/v1/products";
  private baseURL1 = "http://localhost:4100/api/v1/products/vendors";
  private relatedProductsURL = "http://localhost:4100/api/v1/products/relatedproducts";

  constructor(private httpClient:HttpClient) { }

  getProductList():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  
  getVendorProductList(id:number):Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}/${id}`);
  }

  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  getRelatedProducts(id:number):Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.relatedProductsURL}/${id}`);
  }
  
  getProductByVendor(id:number):Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL1}/${id}`);
  }


}