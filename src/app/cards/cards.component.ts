import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Item } from '../interfaces/item';
import { Router } from '@angular/router';
import { ProductRequestService } from '../services/product-request.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  items!:Array<Item> ; 
  @Input() id?:number ;
  count!:number ;
  
   constructor(private products : ProductRequestService 
    ,private cart : ProductsService 
    ,private router : Router){}
   

   ngOnInit()
   {
    this.products.getProductsList().subscribe((res : any) => this.items = res.products);
    this.cart.getProductsCount().subscribe((c)=> this.count = c);
   }
  
  
  redirectToItemPage(id:number)
  {
    this.router.navigate(['items' , id])
  }
  
  recieveCartItem(id:number)
  {
    // Increment products count
    this.cart.updateProductsCount(this.count + 1)

    // get the item object
    const addedItem:any = this.items.filter((el)=> el.id == id) 
    
    // add quantity to cart item
    addedItem[0].quantity=1;

    // push the object into the cart items array
    this.cart.updateCartProducts(addedItem[0]);

    // testing
    //console.log(addedItem[0])
    //console.log(this.UserCart)
  }

}
