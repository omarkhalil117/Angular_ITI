import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
      Myname : string = "Omar";
      imag: string = "./assets/photo-1545665277-5937489579f2.avif";
      myAlert(name:string)
      {
        alert("My name is " + name)
      }

      ngOnInit()
      {
         // start of load
         // Ex: fetch api
      }

      ngDoCheck()
      {
         // check for changes

      }

      ngOnDestroy()
      {
         // clean up method
         // Ex : stop
      }
  
}
