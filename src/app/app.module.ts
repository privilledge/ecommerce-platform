import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { JoinaRoutingModule } from './joina-routing.module';
import { PromotionComponent } from './components/promotion/promotion.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BlogComponent } from './components/blog/blog.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { FormsModule } from '@angular/forms';
import { ShopProductsComponent } from './components/shop-products/shop-products.component';
import { NgToastModule } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { OrdersComponent } from './components/orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PromotionComponent,
    CartComponent,
    WishlistComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    ShopComponent,
    CheckoutComponent,
    SingleProductComponent,
    RegistrationComponent,
    BlogComponent,
    CategoriesComponent,
    ProductsComponent,
    SingleBlogComponent,
    CarouselComponent,
    DummyComponent,
    ShopProductsComponent,
    UserProfileComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    JoinaRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NgToastModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
