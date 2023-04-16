export class OrderDetailsDTO {
    id!:number;
    quantity!:number;
    totalPrice!:number;
    priceAfterTax!:number;
    priceAfterDiscount!:number;
    priceAfterPromotion!:number;
    finalPrice!:number;
    dispatched!:boolean;
    date!:String;
    orderId!:number;
    productId!:number;
    vendorId!:number;
}
