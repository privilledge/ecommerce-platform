import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Cart } from 'src/app/class/cart';
import { Product } from 'src/app/class/product';
import { Users } from 'src/app/class/users';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { SessionService } from 'src/app/services/session.service';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  product: Product = new Product();
  cart: Cart = new Cart();
  qty!: number;
  userDetails: Users = new Users();

  id!: number;
  subcat!: Number;
  relatedProducts: Product[] = [];

  /*START OF PAGINATION PARAMS*/
  page: number = 1;
  totalLength = 1;
  viewItems: number = 4;
  /*END OF PAGINATION PARAMS*/


  constructor(  private route: ActivatedRoute,
                private productService: ProductService,
                private router: Router,
                private cartService: CartService,
                private cookie: CookieService,
                private sessionService:SessionService
  ) { }

  ngOnInit(): void {
    const cookieExists: boolean = this.cookie.check('clientDetails');
    if (cookieExists == true) {
      this.userDetails = JSON.parse(this.cookie.get('clientDetails'));
    }

    window.scroll(0, 0);
    this.id = this.route.snapshot.params['id'];

    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;
      this.productService.getRelatedProducts(this.product.subCategory.id).subscribe(data => {
        this.relatedProducts = data;
        this.totalLength = data.length;
      })

    },
      error => alert('error in getting product'));


    this.cart.qty = 1;
  }

  addToCart() {

  }

  viewProduct(id: number) {
    window.location.href = "/view-product/" + id;
  }

  remove() {
    let num = (<HTMLInputElement>document.getElementById('quantity')).value;
    this.qty = parseInt(num);
    if ((this.qty > 1)) {
      this.qty = this.qty - 1;
      this.cart.qty = this.qty;
    }
  }

  add() {
    let num = (<HTMLInputElement>document.getElementById('quantity')).value;
    this.qty = parseInt(num);
    this.qty = this.qty + 1;
    this.cart.qty = this.qty;
  }

  addItemToCart(id: number) {
    this.sessionService.checksession();
    this.cart.productId = this.product.id;
    this.cart.userId = this.userDetails.id;

    this.cartService.AddUserItemToCart(this.cart).subscribe(data => {
      alert('done');
    }) 
  }

}
