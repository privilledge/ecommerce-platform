import { Users } from "./users";

export class Orders {
    date!:string;
    delivered!:boolean;
    dispatchDate!:string;
    dispatched!:boolean;
    finalPrice!:number;
    id!:number;
    orderNumber!:string;
    quantity!:string;
    reference!:string;
    shippmentFee!:number;
    status!:string;
    totalPrice!:number;
    user!:Users;
    userId!:number;
    
}
