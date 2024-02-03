import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  cartItems?:any ;

  totalPrice:number=0;

  outercount!:number;
  
  constructor(private cartIProds : ProductsService , private count: ProductsService){}

  ngOnInit()
  {
    this.cartItems = this.cartIProds.getCartProducts();
    console.log("Items");

    this.cartItems.forEach((el:any) => {
      this.totalPrice += el.price
    });

    this.count.getProductsCount().subscribe((c:number)=> this.outercount = c)

  }

  decrementQty(id:number)
  {
    let prod = this.cartItems.filter((el:any)=> el.id == id);

    // number cannot be negative & update totalprice & cartitems count
    if(prod[0].quantity >= 1)
    {
      prod[0].quantity -= 1;
      this.totalPrice -= prod[0].price;
      this.count.updateProductsCount(this.outercount - 1)
    }
  }

  IncrementQty(id:number)
  {
    let prod = this.cartItems.filter((el:any)=> el.id == id);

    // limit the increment to stock quantity & update totalprice & cartitems count
    if(prod[0].quantity < prod[0].stock )
    {
      prod[0].quantity += 1;
      this.totalPrice += prod[0].price;
      this.count.updateProductsCount(this.outercount + 1)
    }
  }

  removeItem(id: number)
  {
    // fetch the product
    let prod = this.cartItems.filter((el:any)=> el.id == id); 

    // delete the item from cart list
    this.cartItems = this.cartItems.filter((el:any)=> el.id !== id)

    // update cart items quantity
    this.count.updateProductsCount(this.outercount - prod[0].quantity)

    // update total price
    this.totalPrice -= (prod[0].price*prod[0].quantity)
  }

}
