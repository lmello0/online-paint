import { Component } from '@angular/core';
import { HoverClassDirective } from '../directives/hover-class/hover-class.directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  imports: [HoverClassDirective],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  selectedTool: string = '';
  selectedToolDiv!: HTMLElement;

  selectTool(event: Event) {
    const selectedToolClasses = [
      'selected',
      'shadow-[2px_2px_black_inset,2px_2px_white]',
    ];

    if (this.selectedToolDiv !== undefined) {
      selectedToolClasses.forEach((c) =>
        this.selectedToolDiv.classList.remove(c),
      );
    }

    this.selectedToolDiv = event.target as HTMLElement;
    this.selectedTool = this.selectedToolDiv.id;
    selectedToolClasses.forEach((c) => this.selectedToolDiv.classList.add(c));
  }
}
