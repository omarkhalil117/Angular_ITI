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

  @Output() sendToParent = new EventEmitter<string>()

  getVal(st : string):void
  {
      this.email = st;
      console.log(this.email)
      this.sendToParent.emit(st);
  }


}
