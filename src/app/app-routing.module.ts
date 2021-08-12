import { OrderComponent } from './order/order.component';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'signin',component:SigninComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'menu',component:MenuComponent},
  {path: 'landing',component:LandingComponent},
  {path: 'order',component:OrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
