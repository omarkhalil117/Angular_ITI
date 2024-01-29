import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {

  constructor(private http : HttpClient) { }

  userOrders = new BehaviorSubject<Array<Item>>([]);

  // get products
  getProductsList(){
    return this.http.get('https://dummyjson.com/products');
  }

  getProductInfo(id : string){
    return this.http.get(`https://api.noroff.dev/api/v1/gamehub/${id}` , {})
  }

  

  updateOrders(order : Item[])
  {
    this.userOrders.next(order);
  }
}
