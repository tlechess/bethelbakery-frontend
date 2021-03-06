import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { LoginComponent } from './components/login/login.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { SignUpComponent } from './components/sign-up/sign-up/sign-up.component';
import { LandingPageComponent } from './components/landing-page/landing-page/landing-page.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminAuthGuard } from './auth/admin-auth.guard';
import { NoAccessComponent } from './components/no-access/no-access.component';



const routes: Routes = [
  
  {
    path: '', 
    redirectTo: 'landingPage',
    pathMatch: 'full'
  },
  {
    path: 'landingPage',
    component: LandingPageComponent
  },
  {
    path: 'cart',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login',
    component: LoginComponent
  },
  {
    path: 'shop',
    component: ProductCardsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
    // ConfirmationComponent --> checkout
  {
    path: 'confirmation',
    component: ConfirmationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order-details/:id',
    component: OrderDetailsComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'no-access',
    component: NoAccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
