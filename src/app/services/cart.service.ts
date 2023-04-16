import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../class/cart';
import { Users } from '../class/users';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = "http://localhost:4100/api/v1/cart";
  private updateUrl = "http://localhost:4100/api/v1/cart/update";
  private grandTotal = "http://localhost:4100/api/v1/cart/grandtotal";

  public cartItemList: any = [];
  public cartList!:Cart[];
  public productList = new BehaviorSubject<any>([]);
  public cartItemCount:number= 0;
  userDetails:Users = new Users();


  constructor(      private toast: NgToastService,
                    private httpClient: HttpClient,
                    private cookie:CookieService
  ) { }

  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {

    const isInArray = this.cartItemList.includes(product);
    if (isInArray == true) {
      this.toast.error({ detail: "Error", summary: "Product already added to cart" });
    }
    else {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
      this.toast.info({ detail: "Info", summary: "Product successfully added to cart" });
    }
  }

  getTotalPrice() {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }


  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id == a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  getTotal() {

  }

  AddUserItemToCart(cart: Cart): Observable<Cart> {
    return this.httpClient.post<Cart>(`${this.baseUrl}`, cart)
  }

  getUserItems(id: number): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(`${this.baseUrl}/${id}`);
  }

  getGrandTotal(id: number): Observable<number> {
    return this.httpClient.get<number>(`${this.grandTotal}/${id}`);
  }

  setQty(id:number, cart:Cart):Observable<Cart> {
    return this.httpClient.put<Cart>(`${this.updateUrl}/${id}`, cart);
  }

  deleteCartItem(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`, {responseType: 'text'})
  }

  getItemCount(){
    const cookieExists: boolean = this.cookie.check('clientDetails');
    if (cookieExists == true) {
      this.userDetails = JSON.parse(this.cookie.get('clientDetails'));
    }

    this.getUserItems(this.userDetails.id).subscribe( data => {
      this.cartItemCount = data.length;
    })
  }

}