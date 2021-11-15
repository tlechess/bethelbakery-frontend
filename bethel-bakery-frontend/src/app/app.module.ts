import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ShopComponent } from './shop/shop.component';




@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LoginComponent,
    OrderHistoryComponent,
    ShopComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
