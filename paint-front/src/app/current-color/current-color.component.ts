import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-current-color',
  imports: [],
  templateUrl: './current-color.component.html',
  styleUrl: './current-color.component.css',
})
export class CurrentColorComponent {
  @Input() selectedColor: string = '#000000';
}
