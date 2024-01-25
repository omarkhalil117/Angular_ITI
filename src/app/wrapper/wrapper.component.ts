import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [TodoFormComponent,ListComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent {
    items : string[] = [];

    updateList(newItem : string):void
    {
      this.items.push(newItem);
    }

    delFromList(delItem:string):void
    {
      console.log(this.items);
      this.items = this.items.filter((el:string)=> el != delItem);
    }
}
