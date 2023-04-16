import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public wishItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.wishItemList.push(...product);
    this.productList.next(product);
  }

  addtoWish(product: any) {

    const isInArray=this.wishItemList.includes(product);
    if( isInArray == true){
      alert("Item has already been added to Wishlist");
    }
    else{
      this.wishItemList.push(product);
      this.productList.next(this.wishItemList);
      this.getTotalPrice();
      alert("Item Added to Wishlist");
    }
  }

  getTotalPrice() {
    let grandTotal = 0;
    this.wishItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeWishItem(product: any) {
    this.wishItemList.map((a: any, index: any) => {
      if (product.id == a.id) {
        this.wishItemList.splice(index, 1);
      }
    })
    this.productList.next(this.wishItemList);
  }

  removeAllWish() {
    this.wishItemList = [];
    this.productList.next(this.wishItemList);
  }
}
