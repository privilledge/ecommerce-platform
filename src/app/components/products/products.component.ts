import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Cart } from 'src/app/class/cart';
import { Wishlist } from 'src/app/classes/wishlist';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  public productList:any;

  totalProducts!:number;
  page:number=1;

  name:any; //search value
  totalLength = 1;

  selectedValue!: any;
  viewItems:number=5;

  cartItem:Cart = new Cart();
  wishItem:Wishlist = new Wishlist();

  constructor(    private api: ApiService, 
                  private cartService: CartService,
                  private wishService:WishlistService,
                  private productService:ProductService,
                  private toast:NgToastService) {}

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res => {
      this.productList = res;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1, total: a.price*a.quantity});
      })
    })

    this.totalLength = this.productList.length;
    console.log(this.totalLength); 
  }



  //ADD A CLICK EVENT TO THE BUTTON HANDLING ADDING TO CART (click)=addtoCart(item)
  addtocart(item:  any){
    this.cartService.addtoCart(item);
  }
  addtowish(item:  any){
    this.wishService.addtoWish(item);
  }

  addtoCart(id:number){
    this.productService.getProductById(id).subscribe( data => {
      this.toast.info({detail:"Success", summary:""+id})
    },
    error => this.toast.error({detail:"Error", summary:"FAILED!!! Login to proceed"}));
    
  }

  addToWish(id:number){

  }

}
