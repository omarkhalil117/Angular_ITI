import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../interfaces/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  

  @Input() cardItem?:Item;
  
  constructor(private router : Router){}


  redirectToItemPage(id:any)
  {
    console.log(id);
    this.router.navigate(['items' , id])
  }

}
