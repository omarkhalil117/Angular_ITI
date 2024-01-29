import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  cartItems?:any ;

  totalPrice:number=0;

  constructor(private cartIProds : ProductsService){}

  ngOnInit()
  {
    this.cartItems = this.cartIProds.getCartProducts();
    console.log("Items");

    this.cartItems.forEach((el:any) => {
      this.totalPrice += el.price
    });
  }

  decrementQty(id:number)
  {
    let prod = this.cartItems.filter((el:any)=> el.id == id);

    // number cannot be negative & update totalprice
    if(prod[0].quantity >= 1)
    {
      prod[0].quantity -= 1;
      this.totalPrice -= prod[0].price;
    }
  }

  IncrementQty(id:number)
  {
    let prod = this.cartItems.filter((el:any)=> el.id == id);

    // limit the increment to stock quantity & update totalprice
    if(prod[0].quantity < prod[0].stock )
    {
      prod[0].quantity += 1;
      this.totalPrice += prod[0].price;
    }
  }

}
