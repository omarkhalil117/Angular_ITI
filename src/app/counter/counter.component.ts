import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
 
  count:number = 0;

  constructor(private service : CounterService)
  {
      
  }
  
  ngOnInit()
  {
    this.service.getCounter().subscribe((data)=> this.count=data);
    
  }

  increment()
  {
    this.service.setCounter(this.count+1)
  }

  decrement()
  {
    this.service.setCounter(this.count-1)
  }
}
