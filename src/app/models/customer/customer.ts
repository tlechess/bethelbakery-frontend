import { CartItem } from "../cart-item/cart-item";

export class Customer {    
id: number = 0 ;
userName: string = '';
password: string = '';
isAdmin: boolean;
cartItems: CartItem ;
orders: CartItem ;

}

