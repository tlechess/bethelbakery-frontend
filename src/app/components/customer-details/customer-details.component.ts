import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../models/order/order';
import { CartDataService } from '../../services/cart-data/cart-data.service';
import { OrderDetailsService } from '../../services/order-details.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  newOrder: Order = new Order();
  url = 'loalhost:8080/order';

  constructor(private router: Router, private cartDataService: CartDataService, private http: HttpClient, private orderDetailsService: OrderDetailsService) { }


  ngOnInit(): void {}

  submitOrder() {
    this.orderDetailsService.submitOrder(this.newOrder);  
  }

  

  // getItems(product: Product): void {
   
  // //  what is the URL for posting data to the Db?
  //   if (localStorage.getItem('cartItems') != null) {
  //     let cartItems: CartItem = JSON.parse(localStorage.getItem('cartItems'));
  //    }
  //   }
  //   addOrder(){
  //     this.orderDetailsService.newOrder(this.newOrder).subscribe(order =>{
  //       console.log(order);

  //     })
  //   }

  //  addOrder = (order:Order) => {
  //    this.orderDetailsService.newOrder(Order).subscribe(response => {
      
  //     this

  //       // adding to the Db
  //    } )
}
  
  


