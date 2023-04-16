import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';
import { Cart } from 'src/app/class/cart';
import { Product } from 'src/app/class/product';
import { Users } from 'src/app/class/users';
import { Wishlist } from 'src/app/classes/wishlist';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {

  products: Product[] = [];
  public productList: any;

  cartItem:Cart = new Cart();
  wishItem:Wishlist = new Wishlist();
  userDetails:Users = new Users();


  constructor(    private productService: ProductService,
                  private router: Router,
                  private cartService: CartService,
                  private wishlistService: WishlistService,
                  private api: ApiService,
                  private toast:NgToastService,
                  private cookie:CookieService

  ) { }

  ngOnInit(): void {
    // this.getProducts();

    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;

        this.productList.forEach((a: any) => {
          Object.assign(a, { qty: 1, total: a.unit_price});
        })
      })
  }


  private getProducts() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }

  viewProduct(id: number) {
    this.router.navigate(['view-product', id])
  }

  //ADD A CLICK EVENT TO THE BUTTON HANDLING ADDING TO CART (click)=addtoCart(item)
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

  addtowish(item: any) {
    this.wishlistService.addtoWish(item);

  }

  addtoCart(id:number){
    const cookieExists: boolean = this.cookie.check('clientDetails');
    if(cookieExists == true){
      this.userDetails =JSON.parse(this.cookie.get('clientDetails'));
      this.productService.getProductById(id).subscribe( data => {
        this.cartItem.productId= data.id;
        this.cartItem.qty = 1;
        this.cartItem.userId = this.userDetails.id;
        var name = data.name;
        console.log(this.cartItem);
        this.cartService.AddUserItemToCart(this.cartItem).subscribe( data => {
          this.toast.info({detail:"Success", summary:""+ name+" added to cart"})
        })
        
      },
      error => this.toast.error({detail:"Error", summary:"FAILED!!! Login to proceed"}));
      
    }else{
      this.toast.error({detail:"Error", summary:"FAILED!!! Login to proceed"})
    }

    
  }

  addToWish(id:number){
    this.productService.getProductById(id).subscribe( data => {
      
      this.toast.info({detail:"Success", summary:""+id})
    },
    error => this.toast.error({detail:"Error", summary:"FAILED!!! Login to proceed"}));
    
  }

}
