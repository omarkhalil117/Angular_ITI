import { Component, EventEmitter, Output } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [Comp1Component],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  
  data:string ='';


  sendTxt2(txt2 :string)
  {
    this.data = txt2 ; 
    console.log(this.data);
  }

  recieveComp1(Comp1Txt:any) :void
  {
    console.log("recieved from comp1 " + Comp1Txt)
    this.data = Comp1Txt;
  }
 
  
}
