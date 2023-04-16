import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Mastercard } from 'src/app/class/mastercard';
import { Users } from 'src/app/class/users';
import { CartService } from 'src/app/services/cart.service';
import { MastercardPaymentService } from 'src/app/services/mastercard-payment.service';
import { OrdersService } from 'src/app/services/orders.service';
import { DatePipe } from '@angular/common';
import { Orders } from 'src/app/class/orders';
import { NgToastService } from 'ng-angular-popup';
import { timer } from 'rxjs';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { Cart } from 'src/app/class/cart';
import { OrderDetailsDTO } from 'src/app/class/order-details-dto';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit {
  order:Orders = new Orders ();
  orderDetails:OrderDetailsDTO = new OrderDetailsDTO();
  userDetails: Users = new Users();
  payment: Mastercard = new Mastercard();
  
  cartItems!:Cart[];

  email!: String;
  acc!: String;
  cell!: number;
  total!: number;
  address!: String;
  addressLine2!: String;

  public discount: number = 0; //Overall Discount
  public delivery: number = 0; //Overal delivery fee

  public grandTotal: number = 0;
  finalPrice!:number;
  public product: any = [];

  
  public gTotal: number = 0;

  id: any;

  testDate = new Date();
  dateObj = new Date().toLocaleDateString();
  pipe = new DatePipe('en-US');
  time_yrs:number = new Date().getFullYear()
  time_mn:number = new Date().getMonth();
  time_dy:number = new Date().getDay();
  dateTime!:Date;
  time_hrs!:number;
  time_mins!:number;
  ord_mins!:string;
  time_secs!:number;
  time_milli_secs!:number;
  orderNum!:string;
  todayWithPipe: string | null | undefined;
  qty:any;
  deleteIndex!:number;
  x:any;
  constructor(          private paymentService: MastercardPaymentService,
                        private cartService: CartService,
                        private cookie: CookieService,
                        private orderService:OrdersService,
                        private toast:NgToastService,
                        private orderDetailService:OrderDetailsService
  ) { }

  ngOnInit(): void {
   
    const cookieExists: boolean = this.cookie.check('clientDetails');
    if (cookieExists == true) { 
      this.userDetails = JSON.parse(this.cookie.get('clientDetails'));
      this.id = this.userDetails.id;
    }
    this.getGrandTotal();   
    this.time_mn = this.time_mn+1;
    this.todayWithPipe = this.pipe.transform(Date.now(), 'yyyy/MM/dd');
    this.getCart();
   
    
    timer(0, 1000).subscribe(() => {      
      this.time_hrs = new Date().getHours();
      this.time_mins = new Date().getMinutes();
      this.time_secs = new Date().getSeconds();
      this.time_milli_secs = new Date().getMilliseconds();
      this.testDate  = new Date();
    }) 
    
    this.x = <HTMLInputElement>document.getElementById('currentDate');
    this.x.style.display = "none";
  } 

  private getCart(){
    this.cartService.getUserItems(this.userDetails.id).subscribe( data => {
      this.cartItems = data;
      this.qty = data.length;      
      this.order.quantity = this.qty;
      
    });
    
  }

  private getGrandTotal(){
      this.cartService.getGrandTotal(this.id).subscribe( data => {
        this.gTotal = data;

        var shippment =  0.1 * this.gTotal;
        this.delivery = shippment;
        this.delivery.toLocaleString("en-US", {
          style:"currency",
          currency:"USD",
          minimumFractionDigits:0,
        });

        if(this.delivery < 5){
          this.delivery = 5
        }
      });
  }


  getEmail() {
    this.email = (<HTMLInputElement>document.getElementById('userEmail')).value;
  }

  getAddress() {
    this.address = (<HTMLInputElement>document.getElementById('address')).value;
  }

  getAddressLine2() {
    this.addressLine2 = (<HTMLInputElement>document.getElementById('addressLine2')).value;
  }

  getAccount() {
    this.acc = (<HTMLInputElement>document.getElementById('account')).value;
  }

  makePayment() {
    this.payment.amount = this.gTotal;
    // console.log(this.payment);

    // this.paymentService.makePayment(this.payment).subscribe(data => {
    //   alert('payment successful');
    // }, error => alert('transaction failed!!!!!!'));

    this.generateOrder();
  }

  private generateOrder(){   
    this.orderNum= "JO"+this.time_yrs+"OD"
                    +this.time_dy.toString().padStart(2,'0')+
                    this.time_mn.toString().padStart(2,'0')+"OT"+
                    this.time_hrs.toString().padStart(2,'0')+
                    this.time_mins.toString().padStart(2,'0')+ 
                    this.time_milli_secs.toString().padStart(3, '0');
    
    var today = (<HTMLInputElement>document.getElementById('currentDate')).value;
    this.order.orderNumber = this.orderNum;
    this.order.date  = today;
    var fprice = this.gTotal+this.delivery;
    fprice.toFixed(2);
    this.order.finalPrice =  fprice;
    var del = this.delivery.toFixed(2);
    this.order.shippmentFee = parseInt(del);
    this.order.userId = this.userDetails.id;
    

    console.log(this.orderNum);

    this.orderService.createOrder(this.order).subscribe( data => {
      this.toast.success({detail:"Success", summary:"done"});     
      this.generateOrderDetails();
    })
   

  }


  private generateOrderDetails(){
    this.orderDetails.date = this.order.date;
    
    //Getting Order to use 
    this.orderService.getOrderByOrderNumber(this.order.orderNumber).subscribe( data => {
      this.order = data;
      this.orderDetails.orderId = this.order.id;  

      for(var i of this.cartItems){

        //building order details entity from Items in Cart
        this.orderDetails.quantity = i.qty;
        this.orderDetails.productId = i.product.id;
        this.orderDetails.totalPrice = i.total;
        this.orderDetails.priceAfterDiscount = this.orderDetails.totalPrice;
        this.orderDetails.priceAfterPromotion = this.orderDetails.totalPrice;
        this.orderDetails.priceAfterTax = this.orderDetails.totalPrice;
        this.orderDetails.finalPrice = this.orderDetails.totalPrice;
  
        
        // Adding cart Items to order Details Table
        this.orderDetailService.createOrderDetails(this.orderDetails).subscribe( data => {
        }, error => this.toast.error({detail:"Error", summary:"Error"}));

        //Deleting cartItem Added to order Details Table
        this.cartService.deleteCartItem(i.id).subscribe(data =>{
          this.toast.success({detail:"Success", summary:"Done"});
        }, error => this.toast.error({detail:"Error", summary:"Err"}));
            
      }

    }, error => this.toast.error({detail:"Error", summary:"Error Fetching Order Number"}))   
    

    
  } 
}
