import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductsService } from '../services/products.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

      cartCount!:number ;
      constructor(private count: ProductsService , 
         private router : Router){}

      ngOnInit()
      {
         this.count.getProductsCount().subscribe((c:number)=> this.cartCount = c)
      }

      ReirectToShoppingCart()
      {
         this.router.navigate(['Usercart']);
      }
  
}
