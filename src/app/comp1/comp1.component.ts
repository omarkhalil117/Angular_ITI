import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})

export class Comp1Component {
  
  data:string = '';

  condition:boolean = true ;

  @Input() txtFromComp2:any;
  

  @Output() fromComp1 = new EventEmitter<string>();


  ngOnChanges(changes : SimpleChange)
  {
      this.data = this.txtFromComp2;
  }


  updateData(update:string)
  {
    this.data = update;
  }
  sendTxt1(txt1 :string)
  {
    console.log("Text 1 from comp1 "+txt1);
    this.fromComp1.emit(txt1);
  }

  recieveComp2(txt2:any)
  {
    this.data = txt2 ;
    console.log(this.data);
  }

  toggleCondition()
  {
    this.condition = ! this.condition ;
    console.log(this.condition)
  }
}
