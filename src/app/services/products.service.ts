import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private productsCount = new BehaviorSubject<number>(0);
  private CartProducts:Array<any> = [];

  constructor() { }

  // retrieve count
  getProductsCount()
  {
    return this.productsCount.asObservable();
  }

  // update count
  updateProductsCount(newCount:number)
  {
    this.productsCount.next(newCount);
  }

  getCartProducts()
  {
    return this.CartProducts;
  }

  updateCartProducts(cartItem : any)
  {
    this.CartProducts.push(cartItem);
  }

}
