import { Product } from "./product";

export class CartItem {
    cartId: number = 0;
    product: Product = new Product;
    productQuantity: number = 0;  
}
