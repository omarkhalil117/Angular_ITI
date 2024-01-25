import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  email :string ='';

  // event to send value to wrapper component
  @Output() sendToParent = new EventEmitter<string>()

  // send value to wrapper
  getVal(st : string):void
  {
      this.email = st;
      this.sendToParent.emit(st);
  }


}
