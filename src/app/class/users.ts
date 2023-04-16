import { Role } from "./role";

export class Users {
    id!:number;
    email!:String;
    firstname!:String;
    lastname!:String;
    password!:String;
    phone!:String;
    roles!:Role;
    roleName!:String;
}
