import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SeedsComponent } from './seeds/seeds.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HeroComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'seeds',
    component: SeedsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  }

];
