import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';
import { FormsModule } from '@angular/forms';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [Comp1Component , FormsModule],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  
  data:string ='';

  ngText:string ='';

  fromService:number=0;

  constructor(private service: CounterService){}
  
  ngOnInit(){
    this.service.getCounter().subscribe((num)=> this.fromService=num);
  }

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