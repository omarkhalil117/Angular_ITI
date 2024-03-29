import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardsComponent } from './cards/cards.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

export const routes: Routes = [
    {
        path: "",
        component: CardsComponent,
        title: "Items home page"
    },
    {
        path: "items",
        component: CardsComponent,
        title: "Items home page"
    },
    {
        path: "items/:id",
        component: ItemPageComponent,
        title: "Item Page"
    },
    {
        path: "login",
        component: LoginPageComponent,
        title: "Login Page"
    },
    {
        path: "register",
        component: RegisterPageComponent,
        title: "Register Page"
    },
    {
        path: "Usercart",
        component: ShoppingCartComponent,
        title: "Shoping Cart Page"
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
