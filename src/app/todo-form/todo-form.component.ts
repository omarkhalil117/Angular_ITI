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
  
   // define custom event for the component 
   @Output() sendNewItem = new EventEmitter<string>();

   // Send item name from text field to wrapper component
   addItem(newItem :string)
   {
    this.sendNewItem.emit(newItem);
   }

}
