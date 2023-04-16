import { Brand } from "./brand";
import { Category } from "./category";
import { Discount } from "./discount";
import { Promotion } from "./promotion";
import { SubCategory } from "./sub-category";
import { Tax } from "./tax";
import { Vendor } from "./vendor";

export class Product {

    brandId!:number;
    brand!:Brand;

    categoryId!:number;
    category!:Category;

    discountId!:number;
    discount!:Discount;

    description!:String;
    image1!:String;
    image2!:String;
    image3!:String;
    id!:number;
    name!:String;
    priority!:String;
    quantity!:number;
    status!:String;
    unit_price!:number;

    promotionId!:number;
    promotion!:Promotion;

    
    subCategoryId!:number;
    subCategory!:SubCategory;

    taxId!:number;
    tax!:Tax;
    
    vendorId!:number;
    vendor!:Vendor;
}
