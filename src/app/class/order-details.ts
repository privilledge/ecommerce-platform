import { Orders } from "./orders";
import { Product } from "./product";
import { Vendor } from "./vendor";

export class OrderDetails {
    date!:String;
    dispatched!:boolean;
    finalPrice!:number;
    id!:number;
    orders!:Orders;
    orderId!:number;
    priceAfterDiscount!:number;
    priceAfterPromotion!:number;
    priceAfterTax!:number;
    product!:Product;
    productId!:number;
    quantity!:number;
    totalPrice!:number;
    vendor!:Vendor;
    vendorId!:number;
}
