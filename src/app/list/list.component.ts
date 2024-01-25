import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  // toggling attribute
  status:boolean  = false;

  // get items from wrapper component
  @Input() ListItems:any='';

  // create new event to send item through it
  @Output() sendDeleted = new EventEmitter<string>();

  // send deleted item to wrapper component
  delItem(item : string):void
  {
     this.sendDeleted.emit(item);
     console.log(item)
  }

  // toggle status to show and hide line-through property (defined in list.component.css)
  toggle():void
  {
     this.status = ! this.status ;
  }
}
