import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../interfaces/item';
import { Router } from '@angular/router';
import { StarRateComponent } from '../star-rate/star-rate.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [StarRateComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  

  @Input() cardItem?:Item;

  @Output() sendToCart= new EventEmitter<number>();
  
  constructor(private router : Router){}


  redirectToItemPage(id:number)
  {
    console.log(id);
    console.log(typeof(id))
    this.router.navigate(['items' , id])
  }

  addItemtocart(id:number)
  {
    this.sendToCart.emit(id);
  }

}
