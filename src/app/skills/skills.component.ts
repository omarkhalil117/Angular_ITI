import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
     skills: string[] = ['Javascript','Angular','React','Nodejs'];
}
