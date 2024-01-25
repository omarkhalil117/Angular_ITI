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
  
  status:boolean  = false;

  @Input() ListItems:any='';

  @Output() sendDeleted = new EventEmitter<string>();

  delItem(item : string):void
  {
     this.sendDeleted.emit(item);
     console.log(item)
  }

  toggle():void
  {
     this.status = ! this.status ;
  }
}
