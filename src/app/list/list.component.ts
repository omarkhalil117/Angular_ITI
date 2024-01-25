import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() ListItems:any='';

  @Output() sendDeleted = new EventEmitter<string>();

  delItem(item : string):void
  {
     this.sendDeleted.emit(item);
     console.log(item)
  }
}
