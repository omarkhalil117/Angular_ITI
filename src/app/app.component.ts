import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FontAwesomeModule , CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-first-app';
}
