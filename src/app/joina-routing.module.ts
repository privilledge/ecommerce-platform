import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ShopComponent } from './components/shop/shop.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {ProductsComponent} from "./components/products/products.component";
import {SingleBlogComponent} from "./components/single-blog/single-blog.component";
import { RegistrationComponent } from './components/registration/registration.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'about', component:AboutComponent },
  { path: 'wishlist', component:WishlistComponent },
  { path: 'checkout', component:CheckoutComponent },
  { path: 'promotion', component:PromotionComponent },
  { path: 'shop', component:ShopComponent },
  { path:'promotion',component:PromotionComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'view-product/:id', component:SingleProductComponent},
  { path: 'cart', component:CartComponent},
  { path: 'product', component:ProductsComponent},
  { path: 'blog', component:BlogComponent},
  { path: 'single-blog', component:SingleBlogComponent },
  { path:'registration',component:RegistrationComponent },
  { path:'user-profile',component:UserProfileComponent },
  { path:'orders', component:OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class JoinaRoutingModule { }
