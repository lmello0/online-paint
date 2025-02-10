import { Component, EventEmitter, Output } from '@angular/core';
import { TOOLBELT } from './constants/toolbelt';
import { Tool } from './interfaces/tool';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  readonly toolbelt = TOOLBELT;
  readonly COL_QUANTITY = 2;

  @Output() toolEventEmitter = new EventEmitter<string>();

  selectedTool: string = 'pencil';
  private selectedToolDiv!: HTMLElement;

  selectTool(event: Event, tool: Tool): void {
    const selectedElement = event.target as HTMLElement;

    if (!selectedElement || selectedElement === this.selectedToolDiv) return;

    this.updateToolSelection(selectedElement);
    this.selectedTool = tool.toolName;
    this.toolEventEmitter.emit(this.selectedTool);
  }

  private updateToolSelection(newSelection: HTMLElement): void {
    const selectedToolClasses = [
      'selected',
      'shadow-[2px_2px_black_inset,2px_2px_white]',
    ];

    this.selectedToolDiv?.classList.remove(...selectedToolClasses);
    this.selectedToolDiv?.classList.add(
      'shadow-[2px_2px_black_inset,2px_2px_white]',
    );

    newSelection.classList.add(...selectedToolClasses);
    this.selectedToolDiv = newSelection;
  }
}
