import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Users } from 'src/app/class/users';
import { CartService } from 'src/app/services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem:number=0;
  public cartItemCount:number= 0;
  showProflie!:boolean;
  showLogin:boolean =true;
  userDetails:Users = new Users();

  constructor(    private cartService: CartService,
                  private cookie:CookieService
    ) { }

  ngOnInit(): void {

    const cookieExists: boolean = this.cookie.check('clientDetails');

    if(cookieExists == true){
      this.userDetails =JSON.parse(this.cookie.get('clientDetails'));
      this.showProflie =true;
      this.showLogin =false;

      this.cartService.getUserItems(this.userDetails.id).subscribe( data =>{
        this.cartItemCount = data.length;
      })
        
    }



    this.cartService.getProduct().subscribe(res =>{
      this.totalItem=res.length;
    })

  }


  logout(){
    this.cookie.deleteAll();
    window.location.href='';
  }

}
