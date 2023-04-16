import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public product : any = [];
  public grandTotal:number = 0;

  constructor(private wishService: WishlistService) { }

  ngOnInit(): void {

    this.wishService.getProduct()
    .subscribe(res =>{
      this.product = res;
      this.grandTotal = this.wishService.getTotalPrice();
    })
  }

  removewishItem(item : any){
    this.wishService.removeWishItem(item);
  }
  emptywish(){
    this.wishService.removeAllWish();
  }

}
