import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Cart } from 'src/app/class/cart';
import { Users } from 'src/app/class/users';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product : any = [];
  // public grandTotal:number = 0;
  public cartItemCount:number= 0;
  public gTotal:number=0
  userDetails:Users = new Users();
  showItems:boolean=false;
  showNone:boolean=true;

   cart!:Cart[];
   cartItem:Cart = new Cart();
   id:any;

   arr =[];

  constructor(        private cartService: CartService,
                      private cookie:CookieService
    ) { }

  ngOnInit(): void {
    const cookieExists: boolean = this.cookie.check('clientDetails');
    if (cookieExists == true) {
      this.userDetails = JSON.parse(this.cookie.get('clientDetails'));
      this.id = this.userDetails.id;
    }

    this.getUserCart();
    this.getGrandTotal();
  }

  private getUserCart(){
    this.cartService.getUserItems(this.id).subscribe( data => {
      this.cart = data;
      this.cartItemCount = data.length;
      if(this.cartItemCount > 0){
        this.showItems =true;
        this.showNone =false;
      }
    })    
  }

  removeItem(item : any){
    this.cartService.removeCartItem(item);
  }

  emptycart(){
    this.cartService.removeAllCart();
  }
  
  getTotal(){
    this.cartService.getTotal();
  }

  selectChangeHandler (id:number) {
    this.cartService.setQty(id, this.cartItem).subscribe ( data =>{
      this.ngOnInit();
    })
    
  }

  private getGrandTotal(){
    this.cartService.getGrandTotal(this.id).subscribe( data => {
      this.gTotal = data;
    })
  }

  qtyPop(id:number){

  }


}
