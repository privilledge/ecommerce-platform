import { Product } from "./product";
import { Users } from "./users";

export class Cart {
    id!:number;
    productId!:number;
    product!:Product
    qty!: number;
    total!:number;
    userId!:number;
    user!:Users;
}
