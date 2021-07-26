import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./a/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./b/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./c/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./d/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./f/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./g/cart/cart.module').then( m => m.CartPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
