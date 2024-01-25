import { Component, EventEmitter, Output } from '@angular/core';
import { ListComponent } from '../list/list.component';


@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ListComponent ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  
   @Output() sendToParent = new EventEmitter<string>();

   addItem(newItem :string)
   {
    this.sendToParent.emit(newItem);
   }

}
