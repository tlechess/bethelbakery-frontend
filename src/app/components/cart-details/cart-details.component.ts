import { Component, Injectable, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item/cart-item';
import { Product } from 'src/app/models/product/product';
import { CartdetailService } from 'src/app/services/cartdetail.service';
import { MoneyService } from 'src/app/services/money/money.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  items: CartItem[] = [];
  isCartEmpty: boolean = false; 
  newCartItemOne = new CartItem();
  newCartItemTwo = new CartItem();
  subTotal:number = 0;
  total:number = 0;
  tax: number = 0;
                                    
  constructor(
    private orderDetailsService: OrderDetailsService, 
    private cartDetailService: CartdetailService,
    private moneyService: MoneyService
  ) {}
  
  ngOnInit(): void {
   if(!this.orderDetailsService.checkNothingInCart()){
    this.items = this.orderDetailsService.getCartItemsFromLocalStorage();
   }

   this.calculateAllTotal();  
  }


  calculateAllTotal(): void {
    if (this.items.length > 0){
      this.subTotal = this.moneyService.calculateSubTotal(this.items);
      this.tax = this.moneyService.calculateTax(this.subTotal);
      this.total = this.moneyService.calculateTaxTotal(this.subTotal);
    }
    else {
      this.subTotal = 0;
      this.tax = 0;
      this.total = 0;
    }
  }

  delete(item): void{
   this.cartDetailService.delete(item,this.items);
   this.calculateAllTotal();
  }
  //Set key to the actual key in order for this to !null. newCartItemOne should now have JSON properties.
  getCartItem(newCartItemOne): CartItem {
    this.newCartItemOne = JSON.parse(localStorage.getItem("item1")); //This is working to correctly bring whatever varaiable/array/object is pushed into "items" object.
    return newCartItemOne;                                            
  }
}