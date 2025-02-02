import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { HoverClassDirective } from '../directives/hover-class/hover-class.directive';

@Component({
  selector: 'app-color-picker',
  imports: [HoverClassDirective],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.css',
})
export class ColorPickerComponent {
  isHovered: boolean = false;

  @ViewChild('customColorInput') customColorInput!: ElementRef;
  @ViewChild('customColorDiv') customColorDiv!: ElementRef;

  colorPickerTouchedYet: boolean = false;

  selectedColor: string = '';
  selectedColorDiv!: HTMLElement;

  @Output() colorEventEmitter = new EventEmitter<string>();

  addOutline(): void {
    this.isHovered = true;
  }

  removeOutline(): void {
    this.isHovered = false;
  }

  updateColor(): void {
    const currentColor: string = this.customColorInput.nativeElement.value;
    this.customColorDiv.nativeElement.style.backgroundColor = currentColor;
  }

  onColorPickerClick() {
    if (!this.colorPickerTouchedYet) {
      this.colorPickerTouchedYet = true;
    }

    this.customColorDiv.nativeElement.classList.remove('rainbow');
    this.updateColor();
  }

  selectColor(event: Event) {
    const selectedClassOutline = 'selected';

    if (this.selectedColorDiv !== undefined) {
      this.selectedColorDiv.classList.remove(selectedClassOutline);
    }

    this.selectedColorDiv = event.target as HTMLElement;

    this.selectedColor = this.selectedColorDiv.id;

    this.selectedColorDiv.classList.add(selectedClassOutline);
    this.colorEventEmitter.emit(this.selectedColor);
  }
}
